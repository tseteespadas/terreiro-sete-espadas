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
          , nossas giras públicas estão reduzidas e com limite de assistência.
        </p>
        <p className="t-center">
          <strong>Importante!</strong> Agora, as giras públicas requerem
          inscrição. Caso não se inscreva na gira à partir do formulário 
          disponibilizado aqui no site, sua entrada não será
          permitida.
          <br />O formulário é disponibilizado para todes enquanto o limite de
          inscrições não for atingido.
        </p>
        <p className="t-center">
          Clique em <strong>Saiba Mais</strong> para acompanhar as datas das
          próximas giras públicas e realizar sua inscrição!
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
