import React from "react";

import Section from "../../../components/v2/conteiners/Section";
import { EventPresentation } from "../../../components/v2/conteiners/Presentation";

import img from "../../../assets/feijoada-banner.jpeg";
import imgSm from "../../../assets/feijoada-banner-sm.jpeg";
import imgQRCode from "../../../assets/feijoada-qr-code.jpeg";
import { theme } from "../../../styles/theme";

export default function FeijoadaZe() {
  return (
    <Section id="feijoada-ze" bgColor={theme.colors.black}>
      <EventPresentation titleAlign="right" txtColor={theme.colors.white}>
        <div className="description">
          <h2>Feijoada de Zé Pelintra</h2>
          <img
            className="img"
            src={img}
            alt="Feijoada de Zé Pelintra na Comunidade Ogun Onire. Link para ingressos na descrição"
          ></img>
          <img
            className="img-sm"
            src={imgSm}
            alt="Feijoada de Zé Pelintra na Comunidade Ogun Onire. Link para ingressos na descrição"
          ></img>
          <div className="content pd-right">
            <p>
              <span className="ml-4">A</span> feijoada do Seu Zé é um evento
              sempre muito esperado pela nossa comunidade de axé e ela já tem
              data e hora marcada. Sendo um prato típico brasileiro, símbolo de
              nossas raízes, o que pode ser melhor do que nos reconectarmos à
              ancestralidade? Nossa comunidade está preparando para todes uma
              grande festa, regada de axé, uma deliciosa feijoada, muito samba e
              bingo! Então se você gosta de uma boa macumba, comida, samba e
              diversão venha prestigiar com amigues, familiares e terreiro.
            </p>

            <br />
            <br />
            <p>
              <cite>
                "Vocês estão vendo aquela casa pequenina
                <br />
                Lá no alto da colina que eu mandei fazer
                <br />
                É lá que malandro mora
                <br />
                otário não tem moradia".
              </cite>
            </p>

            <p>
              <small>Salve Seu Zé.</small>
            </p>

            <br />
            <p>
              💰R$ 45,00 + taxa do site R$ 4,90
              <br></br>
              🗓️ Data: 8 de junho
              <br></br>
              🕛 Horário: A partir das 12h00
              <br></br>
              🕛 Bingo: Se inicia a partir das 13h30
              <br></br>
              📍Rua Eng. Reynaldo Cajado, 84 – Tatuapé/SP
            </p>

            <br></br>
            <p className="t-center">
              Pagamentos pelo{" "}
              <a
                href="https://www.sympla.com.br/feijoada-do-seu-ze-pelintra__2467560"
                target="_blank"
                rel="noopener noreferrer"
              >
                sympla
              </a>{" "}
              ou utilize o QR Code abaixo.
            </p>

            <img
              className="fixed-width"
              src={imgQRCode}
              alt="QR Code para a Feijoada de Zé Pelintra na Comunidade Ogun Onire. Link direciona para o Sympla"
            ></img>
          </div>
        </div>
      </EventPresentation>
    </Section>
  );
}
