import Section from "../../../components/v2/conteiners/Section";
import { EventPresentation } from "../../../components/v2/conteiners/Presentation";

import ritualAmorImg from "../../../assets/ritual-amor-25.jpeg";
import { theme } from "../../../styles/theme";

export default function RitualDoAmor() {
  return (
    <Section id="evento" bgColor={theme.colors.black}>
      <EventPresentation titleAlign="right" txtColor={theme.colors.white}>
        <div className="description">
          <h2>Ritual para o amor</h2>
          <img
            className="img"
            src={ritualAmorImg}
            alt="Ritual para o amor da Dona Maria dos Amores do Cais. O fundo da imagem é todo vermelho com as palavras AMOR e MARIA nas extremidades, uma rosa vermelha ao meio."
          ></img>
          <img
            className="img-sm"
            src={ritualAmorImg}
            alt="Ritual para o amor da Dona Maria dos Amores do Cais. O fundo da imagem é todo vermelho com as palavras AMOR e MARIA nas extremidades, uma rosa vermelha ao meio."
          ></img>
          <div className="content pd-right">
            <p>
              <span className="ml-4">É</span> dor de amor<br/>
              <span className="ml-4">É</span> dor de amor<br/>
              <span className="ml-4">Maria bebe todas para curar a minha dor</span>
            </p>
            <br />
            <p>
              <span className="ml-4">Dona</span> Maria dos Amores do Cais realizará mais uma vez seu ritual para o amor no dia 07 de junho de 2025 para aqueles que almejam abertura de caminhos no amor. Além do ritual, teremos gira aberta ao público.
            </p>
            <br />
            <p>
              <span className="ml-4">Para</span> quem quiser participar do ritual, é necessário realizar inscrição prévia fazendo um pix no valor de <b>R$ 33,00</b> para a chave <b>comunidadeonire@gmail.com</b> e enviar comprovante com nome completo para o WhatsApp <a href="https://api.whatsapp.com/send?phone=5511943579057">11 94357-9057</a>.
            </p>
            <br />
            <p>
              🗓️ Data: 07 de junho
              <br></br>
              💲 Valor: R$ 33,00
              <br></br>
              🕛 Horário: à partir das 14h00
              <br></br>
              📍Local: Comunidade Ògún Onirê - Rua Eng. Reynaldo Cajado, 84 – Tatuapé/SP
              <br></br>
              Chave para pagamento: comunidadeonire@gmail.com
            </p>
          </div>
        </div>
      </EventPresentation>
    </Section>
  );
}
