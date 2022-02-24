import React from "react";
import Section from "../../components/v2/conteiners/Section";
import { PresentationUniform } from "../../components/v2/conteiners/Presentation";

export default function AtendimentoParticular() {
  return (
    <Section className="pd-bottom bg-darkblue" id="consultas-particulares">
      <PresentationUniform colorsPreset="light">
        <h2>Atendimento Particular</h2>
        <p className="t-center">
          Estamos realizando atendimentos particulares. Caso tenha interesse,
          entre em contato conosco pelo nosso{" "}
          <a
            href="https://api.whatsapp.com/send?phone=5511952492805&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20particular"
            rel="noopener noreferrer"
            target="_blank"
          >
            Whatsapp.
          </a>
        </p>
      </PresentationUniform>
    </Section>
  );
}
