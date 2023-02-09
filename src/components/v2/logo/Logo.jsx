import React from "react";
import styled from "styled-components";
// import logoWhite from "../../../assets/identidade/logo-horizontal-3.svg";
import logoWhite from "../../../assets/identidade/logo-horizontal-3-no-bg.svg";
import logoBlack from "../../../assets/logo-black.svg";
import { Link } from 'react-router-dom';

const LogoConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
    position: relative;
    display: block;
    width: 100%;
    max-width: 200px;
    
    @media (min-width: 630px) {
      max-width: 400px;
    }
    
    @media (min-width: 900px) {
      max-width: 600px;
    }
  }
`;

export default function Logo(props) {
  const { withLink, logoType } = props;
  return (
    <LogoConteiner>
      {withLink ? (
        <Link to="/">
          <img src={logoType === "white" ? logoWhite : logoBlack } alt="Logo Comunidade Ògún Onirê - Estrela de 7 pontas" />
        </Link>
      ) : (
        <img src={logoType === "white" ? logoWhite : logoBlack } alt="Logo Comunidade Ògún Onirê - Estrela de 7 pontas" />
      )}
    </LogoConteiner>
  )
}
