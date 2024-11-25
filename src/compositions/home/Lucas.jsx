import React from "react";

import Section from "../../components/v2/conteiners/Section";
import Presentation from "../../components/v2/conteiners/Presentation";

import img from "../../assets/lucas.jpeg";
import { theme } from "../../styles/theme";

export default function Lucas() {
  return (
    <Section id="pai-lucas" bgColor={theme.colors.black}>
      <Presentation titleAlign="right" txtColor={theme.colors.white}>
        <div className="description reverse">
          <img
            src={img}
            alt="Foto do Pai de Santo da Comunidade Ògún Onirê, Lucas Maganhato, incorporado com seu ancestral Tranca Ruas, vestido de branco, usando diversas guias."
          ></img>
          <div className="content pd-left">
            <h2>Lucas Maganhato</h2>
            <p>
              <span className="ml-4">Meu</span> nome é Lucas Maganhato, sou pai de santo 
              da Comunidade Ògún Onirê e sacerdote de umbanda.
            </p>

            <p>
              <span className="ml-4">Sou</span> um homem de Ògún, nascido em São Paulo 
              (capital), tenho a umbanda como minha vida desde criança. Assumi a 
              responsabilidade como pai de santo do terreiro fundado pela minha família
              aos 19 anos, e em janeiro de 2019 inauguro o meu próprio terreiro: 
              Casa de Umbanda das Sete Linhas Sagradas, que hoje torna-se a
              Comunidade Ògún Onirê.
            </p>

            <p>
              <span className="ml-4">Sigam</span> meu instagram{" "}
              <a
                href="https://www.instagram.com/lucasdogun/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @lucasdogun
              </a>{" "}
              para mais informações sobre mim, o terreiro e sobre a umbanda em
              geral.
            </p>

            <p className="align-center italic">Pai Lucas Maganhato</p>
          </div>
        </div>
      </Presentation>
    </Section>
  );
}
