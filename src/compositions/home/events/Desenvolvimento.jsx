import React from "react";

import Section from "../../../components/v2/conteiners/Section";
import { EventPresentation } from "../../../components/v2/conteiners/Presentation";

import desenvolvimentoImg from "../../../assets/desenvolvimento.png";
import { theme } from "../../../styles/theme";

export default function Desenvolvimento() {
  return (
    <Section id="evento" bgColor={theme.colors.black}>
      <EventPresentation titleAlign="right" txtColor={theme.colors.white}>
        <div className="description">
          <h2>Vagas abertas para o Desenvolvimento de Terreiro</h2>
          <img
            className="img"
            src={desenvolvimentoImg}
            alt="Na imagem: uma pessoa tomando banho de ervas pelas mãos da Mãe Fiama. A frase 'Desenvolvimento de Terreiro - Vagas abertas' está centralizada e no rodapé da imagem as frases 'Tudo o que é vivo cresce' e 'Saravá'."
          ></img>
          <img
            className="img-sm"
            src={desenvolvimentoImg}
            alt="Na imagem: uma pessoa tomando banho de ervas pelas mãos da Mãe Fiama. A frase 'Desenvolvimento de Terreiro - Vagas abertas' está centralizada e no rodapé da imagem as frases 'Tudo o que é vivo cresce' e 'Saravá'."
          ></img>
          <div className="content pd-right">
            <p>
              <span className="ml-4">As</span> inscrições para o Desenvolvimento
              de Terreiro estão abertas!
            </p>
            <br />
            <p>
              <span className="ml-4">Para</span> realizar sua inscrição, acesse
              o link abaixo ou entre em contato conosco pelos nossos{" "}
              <a href="#contato">canais de comunicação</a>.
            </p>
            <br />
            <p>
              <span className="ml-4">Inscreva-se</span> pelo formulário no{" "}
              <a
                href="https://www.comunidadeogunonire.com.br/cursos/desenvolvimento"
                target="_blank"
                rel="noopener noreferrer"
              >
                link
              </a>
              .
            </p>
            <br />
          </div>
        </div>
      </EventPresentation>
    </Section>
  );
}
