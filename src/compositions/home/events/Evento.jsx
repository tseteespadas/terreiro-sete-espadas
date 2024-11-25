import React from "react";

import Section from "../../../components/v2/conteiners/Section";
import { EventPresentation } from "../../../components/v2/conteiners/Presentation";

import eventoFimAno from "../../../assets/ritual-fim-de-ano.jpeg";
import { theme } from "../../../styles/theme";

export default function Evento() {
  return (
    <Section id="evento" bgColor={theme.colors.black}>
      <EventPresentation titleAlign="right" txtColor={theme.colors.white}>
        <div className="description">
          <h2>Ritual de Abertura de Caminhos para 2025</h2>
          <img
            className="img"
            src={eventoFimAno}
            alt="Ritual de Fim de Ano na Comunidade Ògún Onirê. Imagem conta com o título do curso e ao fundo folhas de eucalípto."
          ></img>
          <div className="content pd-right">
            <p>
              <span className="ml-4">Participe</span> do nosso ritual especial
              de abertura de caminhos, que contará com a última gira aberta de
              2024 com as Pombagiras e Exús. Este evento poderoso é ideal para
              quem busca destrancar os caminhos ou manter os que foram abertos
              em 2024. Quem participar do ritual receberá um patuá confeccionado
              pela Mãe Fiama de Oyá.
            </p>
            <br />
            <p>
              🗓️ Data: 30 de novembro
              <br></br>
              💲 Valor: R$ 25,00
              <br></br>
              🕛 Horário: 16h00
              <br></br>
              📍Local: Comunidade Ògún Onirê - Rua Eng. Reynaldo Cajado, 84 –
              Tatuapé/SP
            </p>
            <br></br>
            <p>
              <span className="ml-4">Increva-se</span> no{" "}
              <a href="/cursos/ritual2025">link</a> para confirmar sua presença!
            </p>
          </div>
        </div>
      </EventPresentation>
    </Section>
  );
}
