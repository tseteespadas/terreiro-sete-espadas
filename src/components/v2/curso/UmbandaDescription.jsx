import styled from "styled-components";

import teologiaImg from "../../../assets/cursos/teologia.jpg";

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
          <span className="ml-4">Umbanda</span> é coisa séria para gente séria!
          Pensando nessa afirmativa, iniciamos o ensino da Umbanda em nosso
          terreiro.
        </p>
        <p>
          <span className="ml-4">Nossa</span> religião é muito rica em valores,
          por isso se faz necessário um estudo mais aprofundado de seus
          ensinamentos, de sua ritualística e do que ela representa em nossas
          vidas. Nosso objetivo é fazer com que o conhecimento e a
          responsabilidade de ser umbandista chegue nos corações e mentes
          daqueles que os aceitarem.
        </p>
      </div>
      
      <div className="img-conteiner">
        <img src={teologiaImg} alt="Mãe Fiama Miranda ajoelhada, segurando uma lança pequena de madeira" />
      </div>
      <div className="desc-conteiner">
        <p>
          <span className="ml-4">Não</span> existem pré-requisitos para este
          curso, somente a vontade de deixar de <i>estar umbandista</i> e
          realmente <i>ser umbandista</i>.
        </p>
        <p>
          <span className="ml-4">Este</span> curso será ministrado inteiramente
          online e possui duração de 1 (um) ano.
        </p>
      </div>
    </Description>
  );
}
