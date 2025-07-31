import React, { useState } from "react";
import styled from "styled-components";
import {
  deleteAssistencia,
  fetchAssistencia,
  patchCalledAssistencia,
} from "../../../../api/giras";
import AssistenciaForm from "../../forms/AssistenciaForm";
import AssistenciaTable from "./AssistenciaTable";
import { toast } from "react-toastify";
import { TableButton } from "./TableButton";

const GiraTable = ({ handleDeleteGira, giras, user, token }) => {
  const [assistencias, setAssistencias] = useState({});
  const [expanded, setExpanded] = useState({});

  const isAdmin = user.role === "admin";

  const toggleAssistencia = async (giraId) => {
    if (!expanded[giraId]) {
      await atualizaAssistencia(giraId);
    }
    setExpanded((prev) => ({ ...prev, [giraId]: !prev[giraId] }));
  };

  const atualizaAssistencia = async (giraId) => {
    const data = await fetchAssistencia(giraId, token);
    setAssistencias((prev) => ({ ...prev, [giraId]: data }));
  };

  const handleDeleteAssistencia = async (giraId, assistenciaId) => {
    const item = assistencias[giraId].find((a) => a._id === assistenciaId);
    if (!item) {
      toast.error("Essa pessoa não existe na lista de assistências");
      return;
    }
    await deleteAssistencia(giraId, assistenciaId, token);
    await atualizaAssistencia(giraId);
    toast.success("Assistência removida com sucesso");
  };

  const handleToggleCalled = async (giraId, assistenciaId) => {
    const item = assistencias[giraId].find((a) => a._id === assistenciaId);
    if (!item) {
      toast.error("Essa pessoa não existe na lista de assistências");
      return;
    }

    const newCalledStatus = !item.called;

    try {
      const updated = await patchCalledAssistencia(
        giraId,
        assistenciaId,
        { called: newCalledStatus },
        token
      );
      await atualizaAssistencia(giraId);
      toast.success(
        `Assistência marcada como ${updated.called ? "chamada" : "não chamada"}`
      );
    } catch (err) {
      console.log(err);
      toast.error("Erro ao atualizar chamado");
    }
  };

  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {giras.map((gira) => (
            <React.Fragment key={gira._id}>
              <tr>
                <td>{gira.name}</td>
                <td>{new Date(gira.date).toLocaleDateString()}</td>
                <td>
                  <div className="flex">
                    <TableButton onClick={() => toggleAssistencia(gira._id)}>
                      {expanded[gira._id] ? "Esconder" : "Ver assistência"}
                    </TableButton>
                    {isAdmin && (
                      <TableButton
                        onClick={() =>
                          window.confirm("Tem certeza que deseja excluir?")
                            ? handleDeleteGira(gira._id)
                            : null
                        }
                      >
                        🗑️ Excluir
                      </TableButton>
                    )}
                  </div>
                </td>
              </tr>
              {expanded[gira._id] && assistencias[gira._id] && (
                <tr>
                  <td colSpan="3">
                    <AssistenciaSection>
                      <strong>Assistência:</strong>

                      <AssistenciaForm
                        giraId={gira._id}
                        onAdd={() => atualizaAssistencia(gira._id)}
                        token={token}
                      />

                      <AssistenciaTableWrapper>
                        <AssistenciaTable
                          giraId={gira._id}
                          isAdmin={isAdmin}
                          assistencia={assistencias[gira._id]}
                          handleToggleCalled={handleToggleCalled}
                          handleDeleteAssistencia={handleDeleteAssistencia}
                        />
                      </AssistenciaTableWrapper>
                    </AssistenciaSection>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  overflow-x: auto;
  margin-bottom: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;

  @media (max-width: 768px) {
    min-width: unset;
  }

  th,
  td {
    padding: 12px 8px;
    border-bottom: 1px solid #ddd;
    text-align: center;

    & > .flex {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
    }
  }

  th {
    background-color: #e4e4e4;
  }
`;

// Wrapper geral da área de assistência
export const AssistenciaSection = styled.div`
  padding: 1rem;
`;

export const AssistenciaTableWrapper = styled.div`
  overflow-x: auto;
`;

export default GiraTable;
