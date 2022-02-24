import React from "react";

import Section from "../../components/v2/conteiners/Section";
import Presentation from "../../components/v2/conteiners/Presentation";

import img from "../../assets/lucas.jpg";

export default function Lucas() {
  return (
    <Section id="pai-lucas">
      <Presentation titleAlign="right">
        <div className="description reverse">
          <img
            src={img}
            alt="Foto do Pai de Santo do Terreiro Sete Espadas, Lucas Maganhato, vestido de branco, usando diversas guias"
          ></img>
          <div className="content pd-left">
            <h2>Lucas Maganhato</h2>
            <p>
              <span className="ml-4">Saravá</span> povo de axé! Venho aqui para
              me apresentar a vocês:
              <br />
              <span className="ml-4">Meu</span> nome é Lucas Maganhato, sou o pai de santo e sacerdote do
              Terreiro Sete Espadas.
            </p>

            <p>
              <span className="ml-4">Filho</span> de Ògún ⚔ Nascido em São Paulo
              (capital), tenho a umbanda como minha vida desde criança. Assumi a
              responsabilidade como pai de santo do terreiro fundado pela minha
              família aos 19 anos, até que em janeiro de 2019 fundo o meu
              próprio terreiro: Casa de Umbanda das Sete Linhas Sagradas, que
              hoje torna-se o Terreiro Sete Espadas!
            </p>

            <p>
              <span className="ml-4">Sigam</span> meu instagram{" "}
              <a
                href="https://www.instagram.com/lucas.maganhato/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @lucas.maganhato
              </a>{" "}
              para mais informações sobre mim, o terreiro e sobre a umbanda em
              geral.
            </p>

            <p className="align-center">
              Que Ògún lhe abençoe 🙏
              <br />
              Axé!
            </p>

            <p className="align-center italic">Pai Lucas Maganhato</p>
          </div>
        </div>
      </Presentation>
    </Section>
  );
}
