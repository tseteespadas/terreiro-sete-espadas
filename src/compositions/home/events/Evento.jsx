import React from "react";

import Section from "../../../components/v2/conteiners/Section";
import { EventPresentation } from "../../../components/v2/conteiners/Presentation";

import img from "../../../assets/cursos/desenvolvimento.jpeg";
import imgSm from "../../../assets/cursos/desenvolvimento.jpeg";
import { theme } from "../../../styles/theme";

export default function Evento() {
  return (
    <Section id="desenvolvimento" bgColor={theme.colors.black}>
      <EventPresentation titleAlign="right" txtColor={theme.colors.white}>
        <div className="description">
          <h2>Desenvolvimento de Terreiro</h2>
          <img
            className="img"
            src={img}
            alt="Desenvolvimento de Terreiro na Comunidade Ogun Onire. Mãe Fiama em pé realizando um banho de ervas na cabeça de uma pessoa."
          ></img>
          <img
            className="img-sm"
            src={imgSm}
            alt="Desenvolvimento de Terreiro na Comunidade Ogun Onire. Mãe Fiama em pé realizando um banho de ervas na cabeça de uma pessoa."
          ></img>
          <div className="content pd-right">
            <p>
              <span className="ml-4">As</span> inscrições para o desenvolvimento
              de terreiro na Comunidade Ògún Onirê estão abertas!
            </p>
            <br />
            <p>
              <span className="ml-4">Para</span> mais informações, inscreva-se
              pelo link abaixo ou entre em contato conosco pelos nossos{" "}
              <a href="#contato">canais de comunicação</a>.
            </p>
            <br />
            <p className="t-center">
              Inscreva-se pelo formulário no{" "}
              <a
                href="https://www.comunidadeogunonire.com.br/cursos/desenvolvimento"
                target="_blank"
                rel="noopener noreferrer"
              >
                link.
              </a>{" "}
            </p>
          </div>
        </div>
      </EventPresentation>
    </Section>
  );
}
