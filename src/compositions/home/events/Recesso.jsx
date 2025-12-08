import React from "react";

import Section from "../../../components/v2/conteiners/Section";
import { EventPresentation } from "../../../components/v2/conteiners/Presentation";

import recessoImg from "../../../assets/recesso-25.jpg";
import { theme } from "../../../styles/theme";

export default function Recesso() {
  return (
    <Section id="evento" bgColor={theme.colors.black}>
      <EventPresentation titleAlign="right" txtColor={theme.colors.white}>
        <div className="description">
          <h2>Recesso</h2>
          <img
            className="img"
            src={recessoImg}
            alt="Na imagem: Diversas ferramentas: picareta, pá, foice, martelo etc., e, no canto superior, centralizado, o texto: 'Recesso - Voltaremos em Janeiro/2026."
          ></img>
          <img
            className="img-sm"
            src={recessoImg}
            alt="Na imagem: Diversas ferramentas: picareta, pá, foice, martelo etc., e, no canto superior, centralizado, o texto: 'Recesso - Voltaremos em Janeiro/2026."
          ></img>
          <div className="content pd-right">
            <p>
              <span className="ml-4">Descanso</span> é ebó para o orí. Nos vemos
              em 2026!
            </p>
            <br />
            <p>
              <span className="ml-4">Os</span> atendimentos particulares seguem
              até 20/12/2025.
            </p>
          </div>
        </div>
      </EventPresentation>
    </Section>
  );
}
