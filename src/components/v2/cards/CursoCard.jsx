import React from "react";
import styled from "styled-components";

const CursoCardConteiner = styled.div`
  border: 2px solid ${(props) => props.theme.colors.darkBlue1};
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
      color: ${(props) => props.theme.colors.dark1};
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
      background-color: ${props => props.theme.colors.red};
      color: white !important;
      border-radius: 0.5em;

      &:hover {
        background-color: ${(props) => props.theme.colors.green};
      }
    }
  }
`;

export default function CursoCard(props) {
  const { curso } = props;
  return (
    <CursoCardConteiner className="curso-card">
      <div className="c-header">
        <img src={curso.img} alt={curso.imgAlt} className="c-img" />
        <div className="c-title">
          <h3>{curso.name}</h3>
        </div>
      </div>
      <div className="c-body">
        <p className="cite">
          {curso.cite}
        </p>
        <a href={curso.link} className="link link-primary">
          Saiba mais!
        </a>
      </div>
    </CursoCardConteiner>
  );
}
