import React from "react";
import Section from "../../components/v2/conteiners/Section";
import { PresentationUniform } from "../../components/v2/conteiners/Presentation";

export default function Giras() {
  return (
    <Section className="pd-bottom bg-white" id="giras">
      <PresentationUniform colorsPreset="dark">
        <h2>Giras</h2>
        <p className="t-center">
          Devido à pandemia de{" "}
          <a
            className="underline"
            href="https://covid.saude.gov.br/"
            target="_blank"
            rel="noreferrer noopener"
          >
            COVID-19
          </a>
          , nossas giras públicas estão reduzidas.
        </p>
        <p className="t-center">
          Para se manter atualizade com relação às próximas giras e rituais,
          clique em saiba mais e deixe seu contato. Utilizaremos as informações
          apenas para enviar atualizações sobre as giras e rituais!
        </p>
        <p className="t-center">
          Usem máscara, evitem aglomerações e se protejam. Em breve estaremos{" "}
          juntos novamente! <br /> Axé!
        </p>
        <a href="/giras" className="btn underline link link-primary">
          Saiba mais!
        </a>
      </PresentationUniform>
    </Section>
  );
}
