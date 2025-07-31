import { useEffect, useState } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteGira, fetchGiras } from "../../api/giras";
import Header from "../../compositions/areaLogada/header";
import GiraTable from "../../components/v2/table/Giras/GiraTable";
import GiraForm from "../../components/v2/forms/GiraForm";
import { useToken, useUser } from "../../store";

const PageWrapper = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;

  button {
    padding: 6px 12px;
    background-color: #ddd;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default function GirasPage() {
  const [giras, setGiras] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const token = useToken();
  const user = useUser();

  if (!user || !token) {
    localStorage.removeItem("token");
    window.location.href = "/entrar";
  }

  const loadGiras = async () => {
    setIsLoading(true);
    try {
      const data = await fetchGiras(page, 5, token);
      setGiras(data.giras);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error("Erro ao carregar giras", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteGira = async (giraId) => {
    try {
      await deleteGira(giraId, token);
      await loadGiras();
      toast.success("Gira excluída com sucesso!");
    } catch (err) {
      console.error("Erro ao excluir gira", err);
      toast.error("Erro ao excluir gira.");
    }
  };

  useEffect(() => {
    loadGiras();
  }, [page, token]);

  return (
    <>
      <Header />
      <PageWrapper>
        <Title>Giras Abertas</Title>

        <GiraForm onCreate={loadGiras} token={token} />

        {isLoading ? (
          <p>Carregando giras...</p>
        ) : (
          <>
            <GiraTable
              handleDeleteGira={handleDeleteGira}
              giras={giras}
              token={token}
              user={user}
            />
            <Pagination>
              <button
                disabled={page <= 1}
                onClick={() => setPage((p) => p - 1)}
              >
                Anterior
              </button>
              <button
                disabled={page >= totalPages}
                onClick={() => setPage((p) => p + 1)}
              >
                Próxima
              </button>
            </Pagination>
          </>
        )}

        <ToastContainer position="top-right" autoClose={3000} />
      </PageWrapper>
    </>
  );
}
