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
      font-size: clamp(1rem, 1.5vw, 2rem);
      margin: 1em auto;

      &:first-child, 
      &:only-of-type {
        margin-top: 4rem;
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
          reencontro com os seus.
        </p>
      </div>
      <div className="img-conteiner">
        <img src={desenvImg} alt="Mãe Fiama Miranda ajoelhada, segurando uma lança pequena de madeira" />
      </div>
      <div className="desc-conteiner">
        <p>
          <span className="ml-4">Essa</span> jornada será dividida em duas
          etapas: A primeira é inteiramente teórica com duração de 6 meses, nos
          quais iremos construir a base que todo umbandista deve possuir,
          através do estudo dos fundamentos, rituais e noções básicas da
          religião e na segunda etapa serão realizados os rituais práticos dos
          amacís e incorporação não somente dos guias, mas também de seus
          valores e de suas representações em nossas vidas.
        </p>
        <p>
          <span className="ml-4">Este</span> curso será ministrado
          presencialmente e não possui duração específica.
        </p>
      </div>
    </Description>
  );
}
