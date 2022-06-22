import React, { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { Alert } from "react-bootstrap";

import { useSetProxGira } from "../../../store";
import api from "../../../services";

const GiraInfoConteiner = styled.div`
  position: relative;
`;

async function fetchGirasData() {
  const { data } = await api.get("/gira/proxima");
  return (data.proxima && data.proxima[0]) ?? null;
}

export default function GiraInfo() {
  const { isLoading, error, data } = useQuery("giraData", fetchGirasData);
  const setProxGira = useSetProxGira();
  useEffect(() => {
    if (data) {
      setProxGira(data);
    }
  }, [data]);

  return (
    <GiraInfoConteiner>
      <h2>Informações sobre a Gira:</h2>
      <p>Acompanhe nossas redes sociais para ficar por dentro das próximas datas e inscreva-se utilizando o formulário abaixo para receber notificações das próximas giras!</p>
      {isLoading && <p>Carregando dados da gira...</p>}
      {error && (
        <Alert variant={"danger"} dismissible>
          Houve um problema ao procurar pela próxima gira. Tente novamente
          mais tarde.
        </Alert>
      )}
      {data && (
        <>
          <p>
            <strong>Data: </strong>
            {new Date(data.startAt).toLocaleDateString()}
          </p>
          <p>
            <strong>Gira: </strong>
            {data.name}
          </p>
        </>
      )}
      { !data && !isLoading && (
        <Alert variant={"info"}>
          Não há giras públicas previstas. Acompanhe nossas redes sociais para ficar por dentro das próximas datas e inscreva-se utilizando o formulário abaixo para receber notificações das próximas giras!
        </Alert>
      )}
    </GiraInfoConteiner>
  );
}
