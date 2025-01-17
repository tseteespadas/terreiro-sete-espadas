import React from "react";
import styled from "styled-components";
import Section from "../../components/v2/conteiners/Section";
import { PresentationUniform } from "../../components/v2/conteiners/Presentation";

import qrCode from "../../assets/qr-code-pix.jpg";
import { theme } from "../../styles/theme";

export default function Apoie() {
  return (
    <Section className="pd-bottom" id="apoie" bgColor={theme.colors.black}>
      <PresentationUniform txtColor={theme.colors.white}>
        <h2>Nos apoie</h2>
        <p className="t-center">
          Contribua com a nossa comunidade através do Pix
          (comunidadeonire@gmail.com) ou utilize o QR code abaixo:
        </p>
        <PixContent
          src={qrCode}
          alt="QR Code para realizar um pix para a Comunidade Ògún Onirê"
        />
        <br />
        <p className="t-center">
          Todo valor arrecadado é revertido para melhorias no nosso espaço de
          axé, porque manter uma comunidade ativa e funcional requer a ajuda de
          todes que frequentam o espaço.
        </p>
        <p className="t-center">
          Caso queira nos apoiar de outras formas, entre em contato conosco via
          WhatsApp <span className="green">(11) 94357-9057</span> ou Instagram{" "}
          <span className="green">(@comunidadeogunonire)</span>.<br />
          <br />
          Todo valor faz a diferença!
        </p>
      </PresentationUniform>
    </Section>
  );
}

const PixContent = styled.img`
  width: 250px;
`;
