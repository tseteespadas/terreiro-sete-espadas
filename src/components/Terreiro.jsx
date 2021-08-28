import React from 'react';
import styled from 'styled-components';

import img from '../assets/sessao-fotos/sessao-fotos (6) span-2.jpg';

const TerreiroWrapper = styled.section`
  background-color: ${props => props.theme.colors.white2};
  position: relative;
  padding: 3rem 3rem 0;
  height: auto;
  width: auto;
`;

const TerreiroConteiner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .terreiro-description {
    display: flex;
    flex-direction: column;
    max-width: 1400px;

    h2 {
      position: relative;
      font-size: 2em;
      font-weight: 700;
      margin: 1.75em 0;
      letter-spacing: 0.025em;
      color: ${props => props.theme.colors.darkblue4};
      &::after {
        position: absolute;
        content: "";
        bottom: -0.25em;
        left: 0;
        right: 0;
        border-bottom: 2px solid ${props => props.theme.colors.darkblue4};
      }
    }

    p {
      letter-spacing: 0.015em;
      font-size: 1.25rem;
      margin-bottom: 1.5em;
    }

    p.align-center {
      text-align: center;
    }

  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    margin-top: 2.5em;
  }

  @media (min-width: 1100px) {
    .terreiro-description {
      flex-direction: row;
    }

    .terreiro-description p {
      text-align: justify;
      text-justify: inter-word;
    }

    .terreiro-description div {
      min-width: 48%;
    }

    .terreiro-description img {
      max-width: 50%;
      margin-top: 0;
    } 

    .terreiro-description > * {
      flex-basis: 100%;
    }

    .terreiro-description > div {
      padding: 0 2em 0 0;
    }
  }

`;

export default function Terreiro() {
  return (
    <TerreiroWrapper id="terreiro" >
      <TerreiroConteiner>
        
        <div className="terreiro-description">
          <div>
            <h2>O Terreiro</h2>
            <p>
              <span className="ml-4">Nosso</span> terreiro foi fundado em janeiro de 2005, como Núcleo Umbandista Pai Oxóssi e 
              Mãe Iemanjá, em 2019 nos tornamos a Casa de Umbanda das Sete Linhas Sagradas. 
              Em janeiro de 2021, fundamos o Terreiro Sete Espadas, sob a liderança do Pai Lucas Maganhato e Mãe Fiama Miranda.
            </p>
              
            <p>
              <span className="ml-4">Nosso</span> objetivo é resgatar os valores ancestrais trazidos pelos nossos guias para dentro 
              da nossa comunidade e sociedade, pois acreditamos que Umbanda e sociedade caminham lado a lado.
            </p>

            <p>
              <span className="ml-4">Este</span> terreiro é um espaço aberto a todes que queiram se encantar com a 
              Umbanda e que se identificam com os valores da nossa comunidade, quais sejam: respeito, humildade, amor, 
              autoconhecimento e busca por uma sociedade mais inclusiva porque, por aqui, se repudia todo e qualquer pensamento e/ou 
              ação que agrida, desrespeite e/ou exclua qualquer indivíduo pela sua cor, gênero, religião, sexualidade e origem!
            </p>

            <p className="align-center">
              Que Ogum lhe abençoe 🙏
              <br />
              Axé!
            </p>

          </div>
          <img src={img} alt="Foto de um altar com imagens de gesso e resina de diversos Orixás e guias e com velas acesas"></img>
        </div>
      </TerreiroConteiner>
    </TerreiroWrapper>
  )
}