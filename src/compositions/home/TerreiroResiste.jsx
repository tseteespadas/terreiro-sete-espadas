import React from "react";
import styled from "styled-components";
import Section from "../../components/v2/conteiners/Section";
import { PresentationUniform } from "../../components/v2/conteiners/Presentation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TerreiroResisteSocialMedia = styled.a`
  color: ${(props) => props.theme.colors.lightblue2};
  svg {
    margin-right: 0.5em;
    color: white;
  }
`;

import img from "../../assets/marca-terreiro-resiste.png";

export default function TerreiroResiste() {
  return (
    <Section id="terreiro-resiste" className="pd-bottom bg-black">
      <PresentationUniform>
        <h2>Terreiro Resiste</h2>
        <a href="https://terreiroresiste.com.br/" rel="noopener noreferrer">
          <img
            target="_blank"
            src={img}
            alt="Logo do coletivo Terreiro Resiste. Consiste na escrita das palavras Terreiro e Resiste uma em baixo da outra, alinhando verticalmente os i's de ambas palavras para formar um garfo de exú."
          />
        </a>
        <h3>Não é somente sobre resistência, é sobre existência.</h3>
        <p>
          <cite>
            “Terreiro Resiste é um movimento que traz como proposta fundamental
            combater toda e qualquer articulação que tenha como consequência ou
            finalidade destituir de integridade física, moral ou intelectual as
            comunidades tradicionais de terreiro e as pessoas que fazem parte
            delas. Com isso, como resultado final de suas ações, o movimento
            propõe resguardar o direito de liberdade plena de culto garantido na
            Constituição Federal de 1988 (que preserva a laicidade na sociedade)
            e reafirmar aos povos de terreiro aquilo que lhes sempre pertenceu:
            o direito à sua autodeterminação.”
          </cite>
          <small>
            Texto retirado de{" "}
            <a
              target="_blank"
              href="https://terreiroresiste.com.br/manifesto/"
              rel="noopener noreferrer"
            >
              https://terreiroresiste.com.br/manifesto/
            </a>
            .
          </small>
        </p>
        <p className="mt-3">
          O Terreiro Sete Espadas apoia o movimento Terreiro Resiste em sua
          totalidade.
        </p>
        <p className="mt-3">
          Para saber mais sobre esse movimento, acesse:
          <TerreiroResisteSocialMedia
            href="https://terreiroresiste.com.br/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fas", "globe"]} />
            Site
          </TerreiroResisteSocialMedia>{" "}
          <TerreiroResisteSocialMedia
            href="https://www.instagram.com/terreiroresiste/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} />
            Instagram
          </TerreiroResisteSocialMedia>
        </p>
      </PresentationUniform>
    </Section>
  );
}
