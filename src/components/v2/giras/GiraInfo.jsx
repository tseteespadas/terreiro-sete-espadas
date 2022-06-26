import React, { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { Alert } from "react-bootstrap";

const GiraInfoConteiner = styled.div`
  position: relative;
`;

export default function GiraInfo() {
  return (
    <GiraInfoConteiner>
      <h2>Informações sobre as Giras abertas:</h2>
      <p>Acompanhe nossas redes sociais para ficar por dentro das próximas datas e inscreva-se utilizando o formulário abaixo para receber notificações das próximas giras!</p>
    </GiraInfoConteiner>
  );
}
