import React from "react";
import styled from "styled-components";
import Section from "../../components/v2/conteiners/Section";
import { PresentationUniform } from "../../components/v2/conteiners/Presentation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { theme } from "../../styles/theme";

const RedeSocial = styled.a`
  font-size: 1.15rem;
  text-decoration: underline;
  svg {
    margin: 0 0.75rem -2px 0;
    color: ${(props) => props.theme.colors.white};
    font-size: 1.3rem;
  }
`;

const SubtitleWithIcon = styled.h3`
  text-align: center;
  display: inline-flex;
  justify-content: center;
  width: 100%;
  .icon {
    font-size: inherit;
    margin-left: 0.25em;
  }
`;

export default function Contato() {
  return (
    <Section className="pd-bottom" id="contato" bgColor={theme.colors.black}>
      <PresentationUniform txtColor={theme.colors.white}>
        <h2>
          Canais de comunicação
          <span className="icon d-inline">
            <FontAwesomeIcon icon={["fas", "bullhorn"]} />
          </span>
        </h2>
        <div className="redes-sociais d-flex flex-column">
          <RedeSocial
            href="https://api.whatsapp.com/send?phone=5511943579057&text=Ol%C3%A1"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={["fab", "whatsapp"]} />
            (11) 94357 9057
          </RedeSocial>
          <RedeSocial
            href="mailto:comunidadeogunonire@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={["fas", "envelope"]} />
            comunidadeogunonire@gmail.com
          </RedeSocial>
          <RedeSocial
            href="https://www.instagram.com/comunidadeogunonire/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} />
            @comunidadeogunonire
          </RedeSocial>
          <RedeSocial
            href="https://www.facebook.com/comunidadeogunonire"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} />
            @comunidadeogunonire
          </RedeSocial>
        </div>
        <div className="endereco">
          <SubtitleWithIcon>
            Endereço
            <span className="icon d-inline">
              <FontAwesomeIcon icon={["fas", "map-marked"]} />
            </span>
          </SubtitleWithIcon>
          <p>
            Rua Engenheiro Reynaldo Cajado, nº 84
            <br />
            CEP: 03061-030 - Tatuapé/SP
          </p>
          <iframe
            title="Rua Engenheiro Reynaldo Cajado, nº 84 - CEP: 03061-030 - Tatuapé/SP"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.899186995021!2d-46.585879685189006!3d-23.53612808469541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5eda09d765f5%3A0xec620d8fc24c4fc7!2sRua%20Engenheiro%20Reynaldo%20Cajado%2C%2084%20-%20Tatuap%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003061-030!5e0!3m2!1sen!2sbr!4v1622383599162!5m2!1sen!2sbr"
            style={{
              border: 0,
              width: "100%",
              maxWidth: "100%",
              minHeight: "20em",
              margin: "0 auto",
              display: "block",
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </PresentationUniform>
    </Section>
  );
}
