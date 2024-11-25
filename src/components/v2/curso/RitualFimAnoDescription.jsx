import styled from "styled-components";

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
        /* margin-top: 4rem; */
      }
    }
  }
`;

export default function RitualFimAnoDescription() {
  return (
    <Description>
      <div className="desc-conteiner">
        <h2>Descrição do Ritual</h2>
        <p>
          <span className="ml-4">Participe</span> do nosso ritual especial de
          abertura de caminhos, que contará com a última gira aberta de 2024 com
          as Pombagiras e Exús. Este evento poderoso é ideal para quem busca
          destrancar os caminhos ou manter os que foram abertos em 2024. Quem
          participar do ritual receberá um patuá confeccionado pela Mãe Fiama de
          Oyá.
        </p>
        <p>
          <span className="ml-4">Data</span> e Hora: 30/11/2025 às 16h.
          <br />
          <span className="ml-4">Local:</span> Rua Engenheiro Reynaldo Cajado,
          84, Tatuapé.
          <br />
          <span className="ml-4">Valor:</span> R$ 25,00.
        </p>
        <p>
          <span className="ml-4">Importante:</span> O pagamento deverá ser feito
          até o dia 29/11/2024 via pix para a chave: comunidadeonire@gmail.com e
          o comprovante deverá ser enviado para o WhatsApp{" "}
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=11943579057&text=Olá, segue meu comprovante de pagamento para o ritual de abertura de caminhos para 2025"
          >
            (11) 94357-9057
          </a>{" "}
          com o nome completo.
        </p>
      </div>
    </Description>
  );
}
