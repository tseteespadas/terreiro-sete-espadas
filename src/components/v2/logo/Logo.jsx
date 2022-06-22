import React from "react";
import styled from "styled-components";
import logo from "../../../assets/logo-white.svg";
import { Link } from 'react-router-dom';

const LogoConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    position: relative;
    top: -1.5rem;
    display: block;
    max-width: 150px;
  }

  h1 {
    position: relative;
    top: -1rem;
    font-size: 1.75rem;
    word-break: keep-all;
    white-space: nowrap;
    margin: 0;

    @media (min-width: 1000px) {
      font-size: 2.75rem;
    }
  }
`;

export default function Logo(props) {
  const { headerTitle, withLink } = props;
  return (
    <LogoConteiner>
      {withLink ? (
        <Link to="/">
          <img src={logo} alt="Logo Terreiro Sete Espadas - Estrela de 7 pontas" />
        </Link>
      ) : (
        <img src={logo} alt="Logo Terreiro Sete Espadas - Estrela de 7 pontas" />
      )}
      <h1>{headerTitle || "Terreiro Sete Espadas"}</h1>
    </LogoConteiner>
  )
}
