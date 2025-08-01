import styled from "styled-components";

import damaImg from "../../../assets/ritual-dama-2025.png";

const Description = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
  width: 100%;

  .img-conteiner img {
    display: block;
    width: 100%;
    aspect-ratio: auto;
    margin: 1em 0;

    @media (min-width: 900px) {
      max-width: 850px;
    }
  }

  .desc-conteiner {
    @media (min-width: 900px) {
      max-width: 850px;
    }

    h2 {
      margin-top: 3rem;
      font-size: clamp(1.5rem, 2.5vw, 3rem);
      font-weight: 700;
      color: ${(props) => props.theme.colors.darkblue3};
      text-align: center;
    }

    p {
      text-align: justify;
      text-justify: inter-word;
      font-size: 1.25rem;
      margin: 1em auto;

      &:first-child,
      &:only-of-type {
        margin-top: 4rem;
      }
    }
  }
`;

export default function RitualDamaDescription() {
  return (
    <Description>
      <div className="desc-conteiner">
        <h2>Descrição do Ritual</h2>
        <p>
          <span className="ml-4">Chegou</span> o tempo de deixar morrer.
        </p>
        <p>
          <span className="ml-4">Na</span> nossa cultura, a morte não é o fim,
          mas sim o começo de algo novo — algo que antes não tinha espaço para
          nascer.
        </p>
      </div>

      <div className="img-conteiner">
        <img
          src={damaImg}
          alt="Imagem do Ritual de Defuntaria da Dama da Noite com o texto 'Ritual de Defuntaria da Dama da Noite' no centro. A imagem contém uma caveira e uma tesoura e tem fundo escuro, dando um ar de mistério."
        />
      </div>
      <div className="desc-conteiner">
        <p>
          <span className="ml-4">Este</span> ritual é um mergulho profundo no
          ato de se despedir: de sentimentos que te amarram, de pessoas do
          passado que te feriram, de histórias, padrões e dores que impedem a
          tua nova vida de florescer.
        </p>
        <p>
          <span className="ml-4">Com</span> a força da ancestralidade,
          iniciaremos o ritual no terreiro, com a gira das Pombagiras. Em
          seguida, seguiremos até o Cemitério da Vila Alpina, onde acontecerá a
          Festa da Dama da Noite — um evento fechado à comunidade, para celebrar
          a vida e a morte da dona do terreiro.
        </p>
        <p>
          <span className="ml-4">Dama</span> da Noite é aquela que subverteu a
          morte, mas nunca a deixou de lado.
          <br />
          <span className="ml-4">Porque</span> sem a morte, não existiria Dama
          da Noite.
        </p>
        <hr />
        <p>
          Valor de troca: <b>R$ 55,00</b>
        </p>
        <p>Pagamento via pix: rituais.onire@gmail.com</p>
        <p>
          Após o pagamento, envie o comprovante para o WhatsApp do terreiro:
          (11) 94357-9057
        </p>
        <p>A Dama da Noite te espera.</p>

        <hr />
      </div>
    </Description>
  );
}
