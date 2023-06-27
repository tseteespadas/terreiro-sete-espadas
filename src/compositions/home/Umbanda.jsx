import React from "react";
import styled from "styled-components";
import Section from "../../components/v2/conteiners/Section";

import damaDaNoite from "../../assets/umbanda.jpeg";
import { theme } from "../../styles/theme";

const CiteOverImageConteiner = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  .text-conteiner {
    margin-top: 3rem;
    color: ${(props) => props.theme.colors.white};
    width: 100%;

    @media (min-width: 1100px) {
      margin: 0;
      position: absolute;
      left: 1rem;
      top: 0;
      bottom: 0;
      /* height: 700px; */
      width: 50%;
      background: linear-gradient(
        90deg,
        rgba(51, 51, 51, 1) 75%,
        rgba(0, 0, 0, 0) 100%
      );

      h2 {
        width: 70%;
        text-align: right;
        margin-bottom: 1rem;
        margin-top: 4rem;
      }
      p {
        width: 70%;
        font-size: 1.4rem;
        text-align: right;
      }
    }

    @media (min-width: 1440px) {
      h2 {
      }
      p {
        font-size: 1.7rem;
      }
    }

    @media (min-width: 2000px) {
      margin-left: 10rem;
    }
  }
  img {
    margin-bottom: 0rem;

    @media (min-width: 1100px) {
      width: calc(100% - 2rem);
      margin: 0;
    }

    @media (min-width: 2000px) {
      width: calc(100% - 70rem);
      margin: 0;
    }
  }

  @media (min-width: 1100px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4rem 0 0;
  }
`;

export default function Umbanda() {
  return (
    <Section id="umbanda" bgColor={theme.colors.black}>
      <CiteOverImageConteiner>
        <div className="text-conteiner">
          <h2>Umbanda</h2>
          <p>
            <cite>
              “Tornar a minha comunidade um local seguro, político e de
              valorização da cultura e memória ancestral por meio das práticas
              religiosas afro-brasileiras, visto que a umbanda é uma religião de
              ideologia preta e de valorização dos povos marginalizados pela
              sociedade antiga e moderna.”
            </cite>
            <br />
            <br />
            <small>Mãe Fiama D'Oya</small>
          </p>
        </div>
        <img
          src={damaDaNoite}
          alt="Pombagira Dama da Noite, ancestral da Mãe Fiama D'Oya, fumando um cigarro."
        ></img>
      </CiteOverImageConteiner>
    </Section>
  );
}
