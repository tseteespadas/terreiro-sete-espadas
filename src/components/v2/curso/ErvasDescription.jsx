import styled from "styled-components";

import ervasImg from "../../../assets/cursos/curso-ervas.jpg";

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

export default function ErvasDescription() {
  return (
    <Description>
      <div className="desc-conteiner">
        <h2>Descrição do Curso</h2>
        <p>
          <span className="ml-4">O</span> curso de ervas é ministrado pela mãe
          Fiama Miranda.
        </p>
      </div>
      <div className="img-conteiner">
        <img
          src={ervasImg}
          alt="Mãe Fiama Miranda ajoelhada, segurando uma lança pequena de madeira"
        />
      </div>
    </Description>
  );
}
