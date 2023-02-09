import styled from "styled-components";

import zeImg from "../../../assets/cursos/zepelintracurso.jpg";

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
      font-size: clamp(1rem, 1.5vw, 2rem);
      margin: 1em auto;

      &:first-child,
      &:only-of-type {
        margin-top: 4rem;
      }
    }
  }
`;

export default function UmbandaDescription() {
  return (
    <Description>
      <div className="desc-conteiner">
        <h2>Descrição do Curso</h2>
        <p>
          <span className="ml-4">De</span> mestre da Jurema aos morros cariocas
          muitas pessoas dentro e fora dos terreiros de umbanda já ouviram falar
          sobre Zé Pelintra, mas quem realmente ele é?
        </p>
      </div>

      <div className="img-conteiner">
        <img
          src={zeImg}
          alt="Congá do Terreiro com estatueta de Zé Pelintra. Ao fundo, uma maquete representando o arco da Lapa"
        />
      </div>
      <div className="desc-conteiner">
        <p>
          <span className="ml-4">De</span> exú a baiano, hoje o malandro é uma
          das entidades mais icônicas da umbanda, mas será que fora os tabus e
          conhecimentos passados de boca em boca sabemos quem ele é e o que
          representa?
        </p>
        <p>
          <span className="ml-4">Em</span> nosso curso, iremos abordar todos os
          "mistérios" que envolvem o malandro Zé Pelintra desde sua origem até
          sua "morte"!
        </p>
      </div>
    </Description>
  );
}
