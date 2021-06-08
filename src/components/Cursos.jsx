import React from "react";
import styled from "styled-components";
import desenvolvimento from '../assets/cursos/desenvolvimento.jpeg';
import teologia from '../assets/cursos/teologia.jpeg';

const CursosWrapper = styled.section`
  position: relative;
  padding: 0 3rem 3rem;
  background-color: ${(props) => props.theme.colors.black1};
  height: auto;
  width: auto;
`;

const CursosConteiner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    margin: 1em 0 0 0;
  }

  @media (min-width: 1100px) {
    .cursos-content {
      flex-direction: row;
    }

    .cursos-content > .curso-card {
      margin: 0;
    }

    .cursos-content > .curso-card + .curso-card {
      margin: 0 0 0 1em;
    }
  }
`;

const CursoCard = styled.div`
  border: 2px solid ${props => props.theme.colors.darkBlue1};
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  margin: 1em 0;
  position: relative;

  .c-header {
    width: 100%;
    min-height: 250px;
    position: relative;
  }

  .c-header .c-img {
    display: block;
    width: calc(100% + 2px);
    height: 100%;
    margin-left: -1px;
    margin-top: -1px;
    border-top-left-radius: calc(0.5em - 1px);
    border-top-right-radius: calc(0.5em - 1px);
  }

  .c-header .c-title {
    position: absolute;
    width: 100%;
    bottom: 10px;
    h3 {
      text-align: center;
      margin: 0 auto;
      color: white;
      text-shadow: 2px 2px #2b2929;
    }
  }

  .c-body {
    height: 100%;
    padding: 1em 1.5em;
    background-color: white;
    border-bottom-right-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    display: flex;
    flex-direction: column;

    p {
      text-align: left;
      color: ${props => props.theme.colors.dark1};
      font-size: 0.8rem;
    }

    .cite {
      letter-spacing: 0.02em;
      font-style: italic;
    }

    .link {
      margin: 0 auto;
      width: fit-content;
    }

    .link-primary {
      padding: 0.75em 1.25em;
      background-color: #007bff;
      color: white;
      border-radius: 0.5em;

      &:hover {
        background-color: ${props => props.theme.colors.darkblue1};
      }
    }
  }
`;

export default function Cursos() {
  return (
    <CursosWrapper id="cursos">
      <CursosConteiner>
        <h2>Cursos</h2>
        <div className="cursos-content">
          <CursoCard className="curso-card">
            <div className="c-header">
              <img src={desenvolvimento} alt="" className="c-img" />
              <div className="c-title">
                <h3>Desenvolvimento Mediúnico</h3>
              </div>
            </div>
            <div className="c-body">
              <p className="cite">O desenvolvimento não se resume em “aprender a incorporar” ...</p>
              <a href="/desenvolvimento" className="link link-primary">Saiba mais!</a>
            </div>
          </CursoCard>
          <CursoCard className="curso-card">
            <div className="c-header">
              <img src={teologia} alt="" className="c-img" />
              <div className="c-title">
                <h3>Teologia de Umbanda</h3>
              </div>
            </div>
            <div className="c-body">
              <p className="cite">Umbanda é coisa séria para gente séria! ...</p>
              <a href="/teologia" className="link link-primary">Saiba mais!</a>
            </div>
          </CursoCard>
        </div>
      </CursosConteiner>
    </CursosWrapper>
  );
}
