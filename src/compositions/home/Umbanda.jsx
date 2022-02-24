import React from "react";

import Section from "../../components/v2/conteiners/Section";
import { PresentationUniform } from "../../components/v2/conteiners/Presentation";

export default function Umbanda() {
  return (
    <Section id="umbanda" className="pd-bottom bg-darkblue">
      <PresentationUniform>
        <h2>Umbanda</h2>
        <p>
          <cite>
            “Umbanda é a cultura da valorização de povos ancestrais socialmente
            excluídos”
          </cite>
          <small>
            David Dias, Pai-de-Santo e Sacerdote do Terreiro de Umbanda Pai João
            de Angola.
          </small>
        </p>
        <p className="mt-3">
          Umbanda é resistência, cultura, identidade e um conjunto de valores
          ancestrais.
        </p>
      </PresentationUniform>
    </Section>
  );
}
