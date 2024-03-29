import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../assets/identidade/icon-red.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black};

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

function NotFound() {
  return (
    <Wrapper>
      <img className="logo" src={logo} alt="Logo Comunidade Ògún Onirê - Rosto do orixá Ògún em formato de inhame (oval), pintado com as cores de Ògún Onirê: azul, verde e vermelho" />
      <h3>Infelizmente a página procurada não existe :(</h3>
      <p>
        <Link to="/">Clique aqui para voltar para a página inicial. Axé!</Link>
      </p>
    </Wrapper>
  );
}

export default NotFound;
