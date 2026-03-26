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
            Rua Dr. Costa Valente, 232
            <br />
            Brás, São Paulo - SP, 03052-000
          </p>
          <iframe
            title="Rua Dr. Costa Valente, 232 - Brás, São Paulo - SP, 03052-000"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.767323857004!2d-46.612922888568214!3d-23.54086966075238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce592060548b99%3A0x234c73b21c943c7d!2sR.%20Dr.%20Costa%20Valente%2C%20232%20-%20Br%C3%A1s%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003052-000!5e0!3m2!1spt-BR!2sbr!4v1774538477974!5m2!1spt-BR!2sbr"
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
