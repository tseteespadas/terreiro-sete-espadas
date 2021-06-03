import React from 'react';
import styled from 'styled-components';

import img from '../assets/lucas.jpg';

const LucasWrapper = styled.section`
  position: relative;
  padding: 0 3rem;
  height: auto;
  width: auto;
`;

const LucasConteiner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .lucas-description {
    display: flex;
    flex-direction: column-reverse;
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
  .lucas-description > div {  
    margin-top: 2.5em;
  } 

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
    margin-bottom: 2em;
  }

  @media (min-width: 1100px) {
    .lucas-description {
      flex-direction: row;
    }

    .lucas-description p {
      text-align: justify;
      text-justify: inter-word;
    }

    .lucas-description div {
      min-width: 48%;
    }

    .lucas-description img {
      max-width: 50%;
      margin: 0;
    } 

    .lucas-description > div {  
      margin-top: 0;
    } 

    .lucas-description > * {
      flex-basis: 100%;
    }

    .lucas-description > div {
      padding: 0 0 0 2em;
    }
  }

`;

export default function Lucas() {
  return (
    <LucasWrapper id="lucas">
      <LucasConteiner>
        <div className="lucas-description">
          <img src={img} alt="Foto do Pai de Santo do Terreiro Sete Espadas, Lucas Maganhato, vestido de branco, usando diversas guias"></img>
          <div className="content">
            <h2>Lucas Maganhato</h2>
            <p>
              <span className="ml-4">Saravá</span> povo de axé! Venho aqui para me apresentar a vocês:
              <br/> 
              Meu nome é Lucas Maganhato, 
              sou o pai de santo e sacerdote do Terreiro de Umbanda Sete Espadas. 
            </p>

            <p>
              <span className="ml-4">Filho</span> de Ogum ⚔ Nascido em São Paulo (capital), tenho a Umbanda como minha vida desde criança. Assumi a responsabilidade
              como pai de santo do terreiro fundado pela minha família aos 19 anos, até que em janeiro de 2019 fundo o meu próprio
              terreiro: Casa de Umbanda das Sete Linhas Sagradas, que hoje torna-se o Terreiro de Umbanda Sete Espadas!
            </p>
             
            <p>
              <span className="ml-4">Sigam</span> meu instagram <a href="https://www.instagram.com/lucas.maganhato/" target="_blank" rel="noopeneer norefereer">@lucas.maganhato</a> para 
              mais informações sobre mim, o terreiro e sobre a Umbanda em geral.
            </p>
             
            <p className="align-center">
              Que Ogum lhe abençoe 🙏
              <br/>
              Axé!
            </p>

            
            <p className="align-center italic">
              Pai Lucas Maganhato
            </p>
          </div>
        </div>
      </LucasConteiner>
    </LucasWrapper>
  )
}