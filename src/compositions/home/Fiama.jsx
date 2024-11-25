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
              <span className="ml-4">Aprendi</span> com os meus mais velhos que 
              devemos entender e reverenciar de onde viemos para saber aonde queremos 
              chegar. Sendo assim, começo dizendo que sou filha da Dona Maria Helena, 
              uma mulher nordestina que fez das tripas coração para me dar uma boa educação, 
              mesmo ganhando pouco e sendo mãe solteira em uma sociedade altamente machista e 
              racista.
            </p>

            <p>
              <span className="ml-4">Sou</span> filha de Pombagira, Dama da Noite, que nos 
              piores momentos da minha vida, tenho certeza de que ela estava lá por mim. 
              Pertenço a essa comunidade desde 2017, quando comecei a cambonar, e atualmente 
              ocupo o lugar de liderança religiosa e política, mãe de santo e sacerdotisa de 
              umbanda.
            </p>

            <p>
              <span className="ml-4">Sou</span> uma mulher política e de esquerda, pois entendo 
              que falar e entender sobre política é um dos papéis fundamentais de uma liderança 
              religiosa nas comunidades de axé. Além disso, a política tem papel crucial na sociedade 
              e em como ela se desenvolve. Somente com a participação de toda a sociedade na política 
              é que conseguiremos lutar pelos nossos direitos.
            </p>

            <p>
              <span className="ml-4">Por</span> fim, em 2020, criei o{" "}
              <a
                href="https://www.instagram.com/pensarmacumba/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @pensarmacumba
              </a>
              , cujo objetivo é disseminar o conhecimento sobre umbanda e 
              todas as suas camadas e política.
            </p>

            <p className="align-center italic">Fiama Miranda</p>
          </div>
          <img
            src={img}
            alt="Foto da Mãe de Santo da comunidade Ògún Onirê, Fiama Maganhato, vestido de branco, usando guias de esquerda."
          ></img>
        </div>
      </Presentation>
    </Section>
  );
}
