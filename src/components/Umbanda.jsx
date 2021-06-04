import React from 'react';
import styled from 'styled-components';

const UmbandaWrapper = styled.section`
  position: relative;
  padding: 0 3rem 3rem;
  background-color: ${props => props.theme.colors.darkblue3};
  height: auto;
  width: auto;
`;

const UmbandaConteiner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .umbanda-description {
    display: flex;
    flex-direction: column;
    width: min(100%, 50em);

    h2 {
      position: relative;
      font-size: 2em;
      font-weight: 700;
      margin: 1.75em 0;
      letter-spacing: 0.025em;
      color: ${props => props.theme.colors.white1};
      text-align: center;
      &::after {
        position: absolute;
        content: "";
        bottom: -0.0125em;
        left: 0;
        right: 0;
        border-bottom: 2px solid ${props => props.theme.colors.white2};
      }
    }

    p {
      color: white;
      display: flex;
      flex-direction: column;
      letter-spacing: 0.015em;
      font-size: 1.25rem;
    }

    p cite {
      font-size: 1.5em;
      font-weight: bold;
      text-align: center;
      font-family: Confortaa;
    }
    p small {
      margin-top: 1em;
      font-size: 0.8em;
      text-align: center;
      font-family: Comfortaa;
    }
  }
`;

export default function Umbanda() {
  return (
    <UmbandaWrapper id="umbanda">
      <UmbandaConteiner>
        <div className="umbanda-description">
          <h2>Umbanda</h2>
          <p>
            <cite>“Umbanda é a cultura da valorização de povos ancestrais socialmente excluídos”</cite>
            <small>David Dias, Pai-de-Santo e Sacerdote do Terreiro de Umbanda Pai João de Angola.</small>
          </p>
          <p className="mt-3">
            Umbanda é uma cultura, é uma identidade, é um encontro com os seus ancestrais, é amor, é estar em comunidade, 
            é um conjunto de valores que nossos guias trazem para dentro do terreiro e para nossas vidas.
          </p>
        </div>
      </UmbandaConteiner>
    </UmbandaWrapper>
  )
}