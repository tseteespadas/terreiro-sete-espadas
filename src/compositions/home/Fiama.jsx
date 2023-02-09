import React from "react";

import Section from "../../components/v2/conteiners/Section";
import Presentation from "../../components/v2/conteiners/Presentation";

import img from "../../assets/fiama.jpeg";
import { theme } from "../../styles/theme";

export default function Fiama() {
  return (
    <Section id="mae-fiama" bgColor={theme.colors.black}>
      <Presentation titleAlign="left" txtColor={theme.colors.white}>
        <div className="description">
          <div className="content pd-right">
            <h2>Fiama Miranda</h2>
            <p>
              <span className="ml-4">Aprendi</span> que devemos entender de onde
              viemos para saber aonde queremos chegar, sendo assim, começo essa
              apresentação dizendo que sou filha da Dona Maria Helena, uma
              mulher que fez das tripas coração para me dar uma boa educação,
              mesmo ganhando pouco e sendo mãe solo em uma sociedade altamente
              machista.
            </p>

            <p>
              <span className="ml-4">Sou</span> filha de Pombagira, Dama da
              Noite, que nos piores momentos da minha vida, tenho certeza de que
              ela estava lá por mim. Pertenço a essa comunidade desde 2017,
              quando comecei a cambonar, e atualmente ocupo o lugar de líder
              religiosa, sacerdotisa e Mãe de Santo.
            </p>

            <p>
              <span className="ml-4">Sou</span> uma mulher política, pois
              entendo que falar e entender sobre política é um dos papéis
              fundamentais de uma liderança religiosa.
            </p>

            <p>
              <span className="ml-4">Em</span> 2020 criei o{" "}
              <a
                href="https://www.instagram.com/pensarmacumba/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @pensarmacumba
              </a>
              , cujo objetivo é disseminar o conhecimento sobre o
              embranquecimento da umbanda e política.
            </p>

            <p className="align-center">Axé!</p>

            <p className="align-center italic">Fiama Miranda</p>
          </div>
          <img
            src={img}
            alt="Foto da Mãe de Santo do Terreiro Sete Espadas, Fiama Maganhato, vestido de branco, usando guias de esquerda."
          ></img>
        </div>
      </Presentation>
    </Section>
  );
}
