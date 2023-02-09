import React from "react";
import styled from "styled-components";
import Section from "../../components/v2/conteiners/Section";

import esu from "../../assets/esu.jpeg";
import { theme } from "../../styles/theme";

const CiteOverImageConteiner = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  .text-conteiner {
    margin-top: 3rem;
    color: ${(props) => props.theme.colors.white};
    width: 100%;

    a {
      color: ${(props) => props.theme.colors.red};
    }
    @media (min-width: 1180px) {
      margin: 0;
      position: absolute;
      left: 1rem;
      top: 4rem;
      height: 700px;
      width: 40%;
      background: linear-gradient(
        90deg,
        rgba(51, 51, 51, 1) 75%,
        rgba(0, 0, 0, 0) 100%
      );

      h2 {
        width: 60%;
        text-align: right;
        margin-bottom: 1rem;
      }
      p {
        width: 60%;
        font-size: 1.5rem;
        text-align: right;
      }
    }
  }
  img {
    margin-bottom: 0rem;

    @media (min-width: 1180px) {
      height: 700px;
      margin: 0;
    }
  }

  @media (min-width: 1180px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4rem 0 0;
  }
`;

export default function AtendimentoParticular() {
  return (
    <Section id="consultas-particulares" bgColor={theme.colors.black}>
      <CiteOverImageConteiner>
        <div className="text-conteiner">
          <h2>Atendimento Particular</h2>
          <br />
          <p className="t-center">
            Realizamos atendimentos particulares. Caso tenha interesse,
            entre em contato conosco pelo nosso{" "}
            <a
              href="https://api.whatsapp.com/send?phone=5511943579057&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20particular"
              rel="noopener noreferrer"
              target="_blank"
            >
              Whatsapp.
            </a>
          </p>
        </div>
        <img src={esu} alt="Estatueta do Orisá Èsú."></img>
      </CiteOverImageConteiner>
    </Section>
  );
}
