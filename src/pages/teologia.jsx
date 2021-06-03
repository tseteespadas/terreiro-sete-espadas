import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../assets/logo-white.svg";
import imagem2 from "../assets/cursos/teologia1.jpeg";
import imagem3 from "../assets/cursos/teologia2.jpeg";

const HeaderConteiner = styled.header`
  position: relative;
  width: auto;
  padding: 1rem 3rem;
  background-color: ${(props) => props.theme.colors.darkblue1};
  color: ${(props) => props.theme.colors.white1};
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    &:focus,
    &:hover {
      text-decoration: none;
    }
  }
  .logo-conteiner {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    @media (min-width: 1400px) {
      margin: 0;
    }
    img {
      min-width: 25%;
      max-width: 100px;
      min-height: 25%;
      max-height: 100px;
    }

    h1 {
      font-size: 1.75rem;
      word-break: keep-all;
      white-space: nowrap;
      margin: 0;
      color: ${(props) => props.theme.colors.white1};
    }
  }

  .menu-conteiner {
    position: relative;
    .menu-icon {
      position: absolute;
      font-size: 2rem;
      transform: translate(-3rem, -7.5rem);
      @media (min-width: 1400px) {
        display: none;
      }
    }
  }
`;

const Content = styled.section`
  width: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  background-color: ${(props) => props.theme.colors.white1};
`;

const Description = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;

  @media (min-width: 1100px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    & > .img-conteiner {
      flex-basis: 25%;
    }

    & > .desc-conteiner {
      flex-basis: 50%;
    }

    & > * + * {
      margin-left: 2em;
    }
  }

  .img-conteiner img {
    display: block;
    max-width: 100%;
    margin: 1em 0;
  }

  .desc-conteiner {
    p {
      text-align: justify;
      text-justify: inter-word;
      max-width: 80%;
      margin: 1em auto;
    }

    h3 {
      margin-top: 1em;
      font-size: 1.75em;
      font-weight: 700;
      color: ${(props) => props.theme.colors.darkblue3};
      text-align: center;
    }
  }
`;

const Inscricoes = styled.div``;

export default function Teologia() {
  return (
    <>
      <HeaderConteiner>
        <Link to="/">
          <div className="logo-conteiner">
            <img src={logo} alt="Logo do terreiro sete espadas"></img>
            <h1>Teologia de Umbanda</h1>
          </div>
        </Link>
      </HeaderConteiner>
      <Content>
        <Description>
          <div className="img-conteiner">
            <img src={imagem2}></img>
          </div>
          <div className="desc-conteiner">
            <h3>Detalhes:</h3>
            <p>
              <span className="ml-4">Umbanda</span> é coisa séria para gente
              séria! Pensando nessa afirmativa, iniciamos o ensino da Teologia
              de Umbanda em nosso terreiro.
            </p>
            <p>
              <span className="ml-4">Nossa</span> religião é muito rica em
              valores, por isso se faz necessário um estudo mais aprofundado de
              seus ensinamentos, de sua ritualística e do que ela representa em
              nossas vidas. Nosso objetivo é fazer com que o conhecimento e a
              responsabilidade de ser umbandista chegue nos corações e mentes
              daqueles que os aceitarem.
            </p>
            <p>
              <span className="ml-4">Não</span> existem pré-requisitos para este
              curso, somente a vontade de aprender e de deixar de estar
              umbandista e realmente SER UMBANDISTA.
            </p>
            <p>
              <span className="ml-4">Este</span> curso será ministrado
              inteiramente online.
            </p>
          </div>
          <div className="img-conteiner">
            <img src={imagem3}></img>
          </div>
        </Description>
      </Content>
    </>
  );
}
