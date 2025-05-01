import React from "react";
import styled from "styled-components";

import Section from "../../../components/v2/conteiners/Section";
import { EventPresentation } from "../../../components/v2/conteiners/Presentation";

import pixReforma from "../../../assets/pix-reforma-grande.jpg";
import { theme } from "../../../styles/theme";

export default function PixReforma() {
  return (
    <StyledSection id="evento" bgColor={theme.colors.black}>
      <EventPresentation titleAlign="right" txtColor={theme.colors.white}>
        <div className="description">
          <div className="content pd-right">
            <p>
              <span className="ml-4">As</span> comunidades de axé são
              fundamentais na manutenção da cultura, identidade e ideologia
              preta que elas carregam, por isso manter e cuidar desses lugares é
              papel de todes.
            </p>

            <p>
              <span className="ml-4">Estamos</span> entrando no período de
              reforma para manutenção do nosso espaço e gostaríamos de contar
              com a sua contribuição para nos ajudar nesta etapa tão importante.
              Qualquer ajuda é bem-vinda!
            </p>
            <StyledImg
              src={pixReforma}
              alt="Ritual de Fim de Ano na Comunidade Ògún Onirê. Imagem conta com o título do curso e ao fundo folhas de eucalípto."
            ></StyledImg>
            <p>
              <span className="ml-4">Clique</span> <a href="#apoie">aqui</a>{" "}
              para saber mais!
            </p>
          </div>
        </div>
      </EventPresentation>
    </StyledSection>
  );
}

const StyledSection = styled(Section)`
  padding-top: 2rem;
`;

const StyledImg = styled.img`
  /* height: 30vh; */
  width: auto;
  background-size: contain;
`;
