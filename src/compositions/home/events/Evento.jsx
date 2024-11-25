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
          <h2>Ritual de Fim de Ano na Comunidade Ògún Onirê</h2>
          <img
            className="img"
            src={eventoFimAno}
            alt="Ritual de Fim de Ano na Comunidade Ògún Onirê. Imagem conta com o título do curso e ao fundo folhas de eucalípto."
          ></img>
          <div className="content pd-right">
            {/* <p>
              <span className="ml-4">Se</span> você deseja conhecer mais sobre ervas,
              sobre nosso
            </p>
            <br />
            <p>
              <span className="ml-4">E</span> agora teremos quiropraxia para
              você dar aquele trato na coluna.
            </p>
            <br />
            <p>
              <span className="ml-4">Teremos</span> flashs exclusivos esperando
              por você ❤️ a partir de R$ 120,00 reais.
            </p>
            <br />
            <p>
              <span className="ml-4">Já</span> deixa essa data reservada no seu
              calendário 12/10/2024.
            </p>
            <br /> */}
            <p>
              <span className="ml-4">Increva-se</span> no{" "}
              <a href="/cursos/ervas">link</a> para confirmar sua presença!
            </p>
            <br />
            <p>
              🗓️ Data: 24 de novembro
              <br></br>
              {/* 🕛 Horário: A partir das 12h00 */}
              <br></br>
              📍Local: Comunidade Ògún Onirê - Rua Eng. Reynaldo Cajado, 84 –
              Tatuapé/SP
            </p>
            <br></br>
          </div>
        </div>
      </EventPresentation>
    </Section>
  );
}
