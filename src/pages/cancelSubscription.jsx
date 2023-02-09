import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

import logo from "../assets/identidade/icon-red.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background-color: ${(props) => props.theme.colors.darkblue4};

  img {
    width: 200px;
    height: 200px;
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
    margin: 20px auto;
    padding: 8px;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    margin: 20px auto;
    padding: 8px;
    a {
      outline: none;
      text-decoration: none;
      color: ${(props) => props.theme.colors.white1};

      &:hover {
        color: ${(props) => props.theme.colors.white1};
        font-weight: 600;
      }
    }
  }
`;

import api from "../services";

async function deleteGiraSubscription(id, setIsLoading, setMessage) {
  try {
    const { data } = await api.delete(`notificacoes/cancelar/${id}`);
    setMessage(data.message);
    setIsLoading(false);
    return data;
  } catch (err) {
    console.error(err.response.data.error);
    setIsLoading(false);
    setMessage(err.response.data.error);
    return err.response.data.error;
  }
}

function CancelSubscription() {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    deleteGiraSubscription(id, setIsLoading, setMessage);
  }, [id]);

  return (
    <Wrapper>
      <img className="logo" src={logo} alt="Logo Comunidade Ògún Onirê - Rosto do orixá Ògún em formato de inhame (oval), pintado com as cores de Ògún Onirê: azul, verde e vermelho" />
      {isLoading && (
        <h3>Estamos processando sua solicitação...</h3>
      )}
      {!isLoading && (
        <h3>{message}</h3>
      )}
      <p>
        <Link to="/">Clique aqui para voltar para a página inicial. Axé!</Link>
      </p>
    </Wrapper>
  );
}

export default CancelSubscription;
