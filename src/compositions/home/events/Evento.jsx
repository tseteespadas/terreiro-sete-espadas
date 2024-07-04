import React from "react";

import Section from "../../../components/v2/conteiners/Section";
import { EventPresentation } from "../../../components/v2/conteiners/Presentation";

import img from "../../../assets/evento-festa-julina.jpeg";
import imgSm from "../../../assets/evento-festa-julina-sm.jpeg";
import { theme } from "../../../styles/theme";

export default function FeijoadaZe() {
  return (
    <Section id="feijoada-ze" bgColor={theme.colors.black}>
      <EventPresentation titleAlign="right" txtColor={theme.colors.white}>
        <div className="description">
          <h2>Festa Julina na Comunidade Ògún Onirê</h2>
          <img
            className="img"
            src={img}
            alt="Festa Julina na Comunidade Ogun Onire. Link para ingressos na descrição"
          ></img>
          <img
            className="img-sm"
            src={imgSm}
            alt="Festa Julina na Comunidade Ogun Onire. Link para ingressos na descrição"
          ></img>
          <div className="content pd-right">
            <p>
              <span className="ml-4">Se</span> prepare para uma Festa Julina
              como você nunca viu antes! Juntamos duas paixões em um único lugar
              para proporcionar uma experiência única e inesquecível.
            </p>

            <br />
            <br />
            <p>
              <span className="ml-4">O</span> que esperar do evento:
            </p>
            <p>✨Bingo com prêmios incríveis;</p>
            <p>✨Comidas típicas deliciosas;</p>
            <p>✨Muita tatuagem.</p>

            <p>
              <span className="ml-4">Essa</span> Festa Julina com Flash Tattoo
              promete ser um evento imperdível! Garanta agora mesmo seu ingresso
              e venha se divertir.
            </p>

            <p>
              <span className="ml-4">Obs.:</span> O Flash Tattoo acontecerá em
              uma espaço dedicado para isso no evento e com toda a segurança
              necessária.
            </p>

            <br />
            <p>
              💰Entrada: R$ 10,00 + R$ 2,50 da taxa do Sympla
              <br></br>
              🗓️ Data: 20 de julho
              <br></br>
              🕛 Horário: A partir das 12h00
              <br></br>
              📍Local: Comunidade Ògún Onirê - Rua Eng. Reynaldo Cajado, 84 –
              Tatuapé/SP
            </p>

            <br></br>
            <p className="t-center">
              Ingressos pelo{" "}
              <a
                href="https://www.sympla.com.br/evento/festa-julina-com-flash-tattoo/2524035"
                target="_blank"
                rel="noopener noreferrer"
              >
                sympla
              </a>{" "}
            </p>
          </div>
        </div>
      </EventPresentation>
    </Section>
  );
}
