import React from "react";
import styled from "styled-components";
import Section from "../../components/v2/conteiners/Section";
import { PresentationUniform } from "../../components/v2/conteiners/Presentation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import qrCode from "../../assets/qr-code-pix.jpg";
import { theme } from "../../styles/theme";

export default function Apoie() {
  return (
    <Section className="pd-bottom" id="apoie" bgColor={theme.colors.black}>
      <PresentationUniform txtColor={theme.colors.white}>
        <h2>Nos apoie</h2>
        <p className="t-center">
          A <span className="red">Comunidade Ògún Onirê cresceu</span> e com
          isso nos deparamos com algumas dificuldades estruturais.
        </p>
        <p className="t-center">
          Além disso, estamos planejando nos{" "}
          <span className="green">mudar para outro local</span> para poder
          acomodar melhor a nossa comunidade.
        </p>
        <p className="t-center">
          Pensando nisso,{" "}
          <strong className="green">
            resolvemos criar esta{" "}
            <a
              className="green"
              href="https://www.vakinha.com.br/vaquinha/apoie-a-comunidade-ogun-onire"
              rel="noopener noreferrer"
              target="_blank"
            >
              vakinha
            </a>
          </strong>{" "}
          com o intuito de arracar dinheiro para diversas melhorias e reformas.
        </p>
        <p className="t-center">
          <span className="green">
            Também aceitamos doações diretamente via pix.
          </span>{" "}
          Caso queira nos apoiar de outras formas, entre em contato conosco via
          whatsapp ou instagram.
        </p>
        <p className="t-center">
          Utilize os dados abaixo para realizar sua doação. Todo valor faz a
          diferença!
        </p>
        <PixContent
          src={qrCode}
          alt="QR Code para realizar um pix para a Comunidade Ògún Onirê"
        />
      </PresentationUniform>
    </Section>
  );
}

const PixContent = styled.img`
  width: 250px;
`;
