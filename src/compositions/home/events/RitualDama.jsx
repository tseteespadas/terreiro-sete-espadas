import Section from "../../../components/v2/conteiners/Section";
import { EventPresentation } from "../../../components/v2/conteiners/Presentation";

import ritualDama2025 from "../../../assets/ritual-dama-2025.png";
import { theme } from "../../../styles/theme";

export default function RitualDama() {
  return (
    <Section id="evento" bgColor={theme.colors.black}>
      <EventPresentation titleAlign="right" txtColor={theme.colors.white}>
        <div className="description">
          <h2>Ritual de Defuntaria da Dama da Noite</h2>
          <img
            className="img"
            src={ritualDama2025}
            alt="Imagem do Ritual de Defuntaria da Dama da Noite com o texto 'Ritual de Defuntaria da Dama da Noite' no centro. A imagem contém uma caveira e uma tesoura e tem fundo escuro, dando um ar de mistério."
          ></img>
          <img
            className="img-sm"
            src={ritualDama2025}
            alt="Imagem do Ritual de Defuntaria da Dama da Noite com o texto 'Ritual de Defuntaria da Dama da Noite' no centro. A imagem contém uma caveira e uma tesoura e tem fundo escuro, dando um ar de mistério."
          ></img>
          <div className="content pd-right">
            <p>
              <span className="ml-4">Chegou</span> o tempo de deixar morrer.
            </p>
            <p>
              <span className="ml-4">Na</span> nossa cultura, a morte não é o
              fim, mas sim o começo de algo novo — algo que antes não tinha
              espaço para nascer.
            </p>
            <p>
              <span className="ml-4">Este</span> ritual é um mergulho profundo
              no ato de se despedir: de sentimentos que te amarram, de pessoas
              do passado que te feriram, de histórias, padrões e dores que
              impedem a tua nova vida de florescer.
            </p>
            <p>
              <span className="ml-4">Com</span> a força da ancestralidade,
              iniciaremos o ritual no terreiro, com a gira das Pombagiras. Em
              seguida, seguiremos até o Cemitério da Vila Alpina, onde
              acontecerá a Festa da Dama da Noite — um evento fechado à
              comunidade, para celebrar a vida e a morte da dona do terreiro.
            </p>
            <p>
              <span className="ml-4">Dama</span> da Noite é aquela que subverteu
              a morte, mas nunca a deixou de lado.
              <span className="ml-4">Porque</span> sem a morte, não existiria
              Dama da Noite.
            </p>
            <p>
              <span className="ml-4">Para</span> participar do ritual, é
              necessário realizar sua{" "}
              <a href="/rituais/defuntaria-dama-da-noite">inscrição</a>, efetuar
              o pagamento no valor de <b>R$ 55,00</b> para a chave{" "}
              <b>rituais.onire@gmail.com</b> e enviar comprovante com nome
              completo para o WhatsApp{" "}
              <a href="https://api.whatsapp.com/send?phone=5511943579057">
                11 94357-9057
              </a>
              . Além do pagamento via pix, também podemos gerar um link de
              pagamento para opções de crédito e débito, basta entrar em contato
              conosco pelo WhatsApp acima.
            </p>
            <br />
            <p>
              🗓️ Data: 23 de agosto
              <br></br>
              💲 Valor: R$ 55,00
              <br></br>
              🕛 Horário: à partir das 12h00
              <br></br>
              📍Local: Comunidade Ògún Onirê - Rua Eng. Reynaldo Cajado, 84 –
              Tatuapé/SP
              <br></br>
            </p>
            <p className="center">
              <a className="green" href="/rituais/defuntaria-dama-da-noite">
                Increva-se!
              </a>
            </p>
            <br />
            <p>A Dama da Noite te espera.</p>
          </div>
        </div>
      </EventPresentation>
    </Section>
  );
}
