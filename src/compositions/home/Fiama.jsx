import React from "react";

import Section from "../../components/v2/conteiners/Section";
import Presentation from "../../components/v2/conteiners/Presentation";

import img from '../../assets/fiama.jpg';

export default function Fiama() {
  return (
    <Section id="mae-fiama">
      <Presentation titleAlign="left" >
        <div className="description">
          <div className="content pd-right">
          <h2>Fiama Miranda</h2>
            <p>
              <span className="ml-4">Salve</span> comunidade de axé!
              Me chamo Fiama, sou filha de Pombagira e faço parte desta comunidade desde 2017 quando comecei a cambonar nas giras e 
              hoje juntamente com o Lucas estou à frente do terreiro.
            </p>

            <p>
              <span className="ml-4">Além</span> disso, possuo uma página no 
              Instagram <a href="https://www.instagram.com/pensarmacumba/" target="_blank" rel="noopener noreferrer">@pensarmacumba</a> na 
              qual escrevo sobre umbanda e tudo que está ligado à ela.
            </p>
             
            <p className="align-center">
              Que Iansã e Pombagira abençoe a todes! 🙏
              <br/>
              Axé!
            </p>

            <p className="align-center italic">
              Fiama Miranda
            </p>
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
