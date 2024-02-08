import styled from "styled-components";

import desenvImg from "../../../assets/cursos/desenvolvimento.jpeg";

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

export default function DesenvolvimentoDescription() {
  return (
    <Description>
      <div className="desc-conteiner">
        <h2>Descrição do Curso</h2>
        <p>
          <span className="ml-4">O</span> desenvolvimento não se resume em
          “aprender a incorporar”, pois acreditamos que seja um momento de
          reencontro com os seus ancestrais. É muito comum atualmente vermos o
          desenvolvimento como uma ferramenta de recrutamento para a construção
          de “fábrica de médiuns”, mas devemos entender o real sentido do
          desenvolver na umbanda. Não é somente a cor da vela, a saudação
          correta de cada orixá ou saber quem é meu Exu que importa, pois, nada
          disso faz sentido se os valores usados como base forem banalizados
          como tantas outras coisas são nos terreiros.
        </p>
      </div>
      <div className="img-conteiner">
        <img
          src={desenvImg}
          alt="Mãe Fiama Miranda ajoelhada, segurando uma lança pequena de madeira"
        />
      </div>
      <div className="desc-conteiner">
        <p>
          <span className="ml-4">O</span> desenvolvimento não tem um tempo certo
          para terminar, pois os saberes de terreiro são infinitos e complexos
          para serem entendidos em um espaço de tempo fixado. É no chão de
          terreiro que se aprende sobre ancestralidade, responsabilidade social,
          política e cultura afro-brasileira. Só se aprende sobre comunidade
          estando em uma.
        </p>
        <p>
          <span className="ml-4">Os</span> encontros são semanais
          (sextas-feiras) e o desenvolvimento é indicado àqueles que querem
          aprender e entender a dinâmica de terreiro, bem como fazer parte de
          uma comunidade de axé.
        </p>
        <p>
          <span className="ml-4">Por</span> isso, se esse for seu momento de
          terreiro, chegou o dia!
        </p>
      </div>
    </Description>
  );
}
