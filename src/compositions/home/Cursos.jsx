import React from "react";
import styled from "styled-components";
import Section from "../../components/v2/conteiners/Section";
import CursoCard from "../../components/v2/cards/CursoCard";

import cursos from "../../data/cursos";

const CursosConteiner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .wrapper {
    display: flex;
    flex-direction: column;
    width: min(100%, 50em);
    h2 {
      position: relative;
      font-size: 2em;
      font-weight: 700;
      margin: 1.75em 0;
      letter-spacing: 0.025em;
      color: ${(props) => props.theme.colors.white1};
      text-align: center;
      &::after {
        position: absolute;
        content: "";
        bottom: -0.0125em;
        left: 0;
        right: 0;
        border-bottom: 2px solid ${(props) => props.theme.colors.white2};
      }
    }
    .cursos-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1em 0 0 0;
    }

    @media (min-width: 1100px) {
      .cursos-content {
        flex-direction: row;
        align-items: baseline;
      }

      .cursos-content > .curso-card {
        margin: 0;
      }

      .cursos-content > .curso-card + .curso-card {
        margin: 0 0 0 1em;
      }
    }
  }
`;

export default function Cursos() {
  return (
    <Section className="pd-bottom bg-darkblue" id="cursos">
      <CursosConteiner>
        <div className="wrapper">
          <h2>Cursos</h2>
          <div className="cursos-content">
            {cursos.map((curso) => (
              <CursoCard key={curso.id} curso={curso} />
            ))}
          </div>
        </div>
      </CursosConteiner>
    </Section>
  );
}
