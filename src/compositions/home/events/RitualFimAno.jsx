import Section from "../../../components/v2/conteiners/Section";
import { EventPresentation } from "../../../components/v2/conteiners/Presentation";

import ritualAberturaCaminhos from "../../../assets/ritual-abertura-2026.jpg";
import { theme } from "../../../styles/theme";

export default function RitualFimAno() {
  return (
    <Section id="evento" bgColor={theme.colors.black}>
      <EventPresentation titleAlign="right" txtColor={theme.colors.white}>
        <div className="description">
          <h2>Ritual de Abertura de Caminhos para 2026!</h2>
          <img
            className="img"
            src={ritualAberturaCaminhos}
            alt="Ritual de Abertura de Caminhos para 2026 e última gira aberta de 2025, sábado 29 de novembro. Valor de troca: R$ 35,00"
          ></img>
          <img
            className="img-sm"
            src={ritualAberturaCaminhos}
            alt="Ritual de Abertura de Caminhos para 2026 e última gira aberta de 2025, sábado 29 de novembro. Valor de troca: R$ 35,00"
          ></img>
          <div className="content pd-right">
            <p>
              <span className="ml-4">Participe</span>
              do nosso ritual especial de abertura de caminhos, que contará com
              a última gira aberta de 2025 do Povo da Rua.
            </p>
            <br />
            <p>
              <span className="ml-4">Este</span> evento poderoso é ideal para
              quem busca destrancar os caminhos ou manter os que foram abertos
              em 2025. Quem for participar do ritual receberá um patuá
              confeccionado pela Mãe Fiama de Oyá.
            </p>
            <br />
            <p>
              <span className="ml-4">Para</span> O pagamento poderá ser
              realizado por pix <b>R$ 35,00</b> para a chave{" "}
              <b>comunidadeonire@gmail.com</b>, cartão de crédito (através de
              link para pagamento), débito ou em dinheiro. Assim que efetuar o
              pagamento, envie o comprovante para o WhatsApp{" "}
              <a href="https://api.whatsapp.com/send?phone=5511943579057">
                11 94357-9057
              </a>{" "}
              com o nome completo.
            </p>
            <p>Comece o ano com caminhos abertos!</p>
            <br />
            <p>
              🗓️ Data: 29/11/2025
              <br></br>
              💲 Valor: R$ 35,00
              <br></br>
              🕛 Horário: à partir das 14h.
              <br></br>
              📍Local: Comunidade Ògún Onirê - Rua Eng. Reynaldo Cajado, 84 -
              Tatuapé/SP
              <br></br>
              Chave para pagamento: comunidadeonire@gmail.com
            </p>
          </div>
        </div>
      </EventPresentation>
    </Section>
  );
}
