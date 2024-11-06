import React from "react";

import Section from "../../../components/v2/conteiners/Section";
import { EventPresentation } from "../../../components/v2/conteiners/Presentation";

import tattooEventImg from "../../../assets/tattoo-quiro-evento.jpg";
import { theme } from "../../../styles/theme";

export default function Evento() {
  return (
    <Section id="evento" bgColor={theme.colors.black}>
      {/* <EventPresentation titleAlign="right" txtColor={theme.colors.white}>
        <div className="description">
          <h2>2° edição do Flash Tattoo na Comunidade Ògún Onirê</h2>
          <img
            className="img"
            src={tattooEventImg}
            alt="2° edição do Flash Tattoo e Sessão de Quiropraxia na Comunidade Ògún Onirê dia 12 de outubro à partir das 12h00. Arte por @paulin_ilustra"
          ></img>
          <div className="content pd-right">
            <p>
              <span className="ml-4">Ansiosos</span> para a nossa 2° edição do
              Flash Tattoo?
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
            <br />
            <p>
              <span className="ml-4">Compartilha</span> no grupo do terreiro,
              nos stories, no grupo da família! Contamos com a sua presença!
            </p>
            <br />
            <p>
              🗓️ Data: 12 de outubro
              <br></br>
              🕛 Horário: A partir das 12h00
              <br></br>
              📍Local: Comunidade Ògún Onirê - Rua Eng. Reynaldo Cajado, 84 –
              Tatuapé/SP
            </p>
            <br></br>
          </div>
        </div>
      </EventPresentation> */}
    </Section>
  );
}
