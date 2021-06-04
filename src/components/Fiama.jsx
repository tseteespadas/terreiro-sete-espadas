import React from 'react';
import styled from 'styled-components';

import img from '../assets/fiama.jpg';

const FiamaWrapper = styled.section`
  position: relative;
  padding: 0 3rem;
  height: auto;
  width: auto;
`;

const FiamaConteiner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .fiama-description {
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
      text-align: right;
      &::after {
        position: absolute;
        content: "";
        bottom: -0.0125em;
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

    p.italic {
      font-style: italic;
    }

  }
  .fiama-description > div {  
    margin-top: 2.5em;
  } 

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
    margin-bottom: 2em;
  }

  @media (min-width: 1100px) {
    .fiama-description {
      flex-direction: row;
    }

    .fiama-description p {
      text-align: justify;
      text-justify: inter-word;
    }

    .fiama-description div {
      min-width: 48%;
    }

    .fiama-description img {
      max-width: 50%;
      margin: 0;
    } 

    .fiama-description > div {  
      margin-top: 0;
    } 

    .fiama-description > * {
      flex-basis: 100%;
    }

    .fiama-description > div {
      padding: 0 2em 0 0;
    }
  }

`;

export default function Lucas() {
  return (
    <FiamaWrapper id="fiama">
      <FiamaConteiner>
        <div className="fiama-description">
          <div className="content">
            <h2>Fiama Miranda</h2>
            <p>
              <span className="ml-4">Salve</span> comunidade de axé!
              Me chamo Fiama, sou filha de Pombagira e faço parte desta comunidade desde 2017 quando comecei a cambonar nas giras e 
              hoje juntamente com o Lucas estou à frente do terreiro.
            </p>

            <p>
              <span className="ml-4">Além</span> disso, possuo uma página no 
              Instagram <a href="https://www.instagram.com/pensarmacumba/" target="_blank" rel="noopeneer norefereer">@pensarmacumba</a> na 
              qual escrevo sobre umbanda e tudo que está ligado à ela.
            </p>
             
            <p className="align-center">
              Que Iansã e Pombagira abençoe a todes! 🙏
              <br/>
              Axé!
            </p>

            <p className="align-center italic">
              Fiama Miranda
            </p>
          </div>
          <img src={img} alt="Foto da Mãe de Santo do Terreiro Sete Espadas, Fiama Maganhato, vestido de branco, usando guias de esquerda."></img>
        </div>
      </FiamaConteiner>
    </FiamaWrapper>
  )
}