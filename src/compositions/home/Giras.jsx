import React from "react";
import Section from "../../components/v2/conteiners/Section";
import { PresentationUniform } from "../../components/v2/conteiners/Presentation";

import { theme } from "../../styles/theme";

export default function Giras() {
  return (
    <Section className="pd-bottom" id="giras" bgColor={theme.colors.black}>
      <PresentationUniform txtColor={theme.colors.white}>
        <h2>Giras</h2>
        <p className="t-center">
          Para informações sobre as giras e rituais em nossa comunidade,
          acompanhe nossa página no instagram{" "}
          <a
            href="https://instagram.com/comunidadeogunonire/"
            rel="noopener noreferrer"
            target="_blank"
          >
            @comunidadeogunonire
          </a>
          .
        </p>
      </PresentationUniform>
    </Section>
  );
}
