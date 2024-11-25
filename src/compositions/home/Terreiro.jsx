import React from "react";

import Section from "../../components/v2/conteiners/Section";
import Presentation from "../../components/v2/conteiners/Presentation";

import img from "../../assets/identidade/icon-red.svg";
import { theme } from "../../styles/theme";

export default function Terreiro() {
  return (
    <Section id="terreiro" className="pd-top" bgColor={theme.colors.black}>
      <Presentation titleAlign="left" txtColor={theme.colors.white}>
        <div className="description">
          <div className="content pd-right">
            <h2>O Terreiro</h2>
            <p>
              <span className="ml-4">O</span> terreiro começa como Núcleo 
              Umbandista Pai Oxóssi e Mãe Iemanjá em 2005, em 2019 nos 
              tornamos a Casa de Umbanda das Sete Linhas Sagradas. Em 
              janeiro de 2021, nasce a Comunidade Ògún Onirê, sob a liderança 
              do Pai Lucas D'Ògún e Mãe Fiama de Oyá.
            </p>

            <p>
              <span className="ml-4">Somos</span> um espaço político, de 
              resistência e de valorização da cultura preta, porque acreditamos 
              nesta umbanda afro-brasileira que sofreu e sofre ainda com o 
              racismo que lhe causou o embranquecimento e apagamento de sua 
              ideologia preta, rica em ritos, cultura e principalmente em identidade.
            </p>

            <p>
              <span className="ml-4">Buscamos</span> resgatar os valores ancestrais 
              trazidos pelos nossos guias para a nossa comunidade, ensinando aos nossos 
              filhes sobre seus valores e importância, para que os ensinamentos internos 
              reflitam na sociedade.
            </p>

            <p>
              <span className="ml-4">Este</span> terreiro é um espaço aberto a todes que 
              queiram fazer parte desta causa denominada umbanda, porque aqui entendemos 
              que o que fazemos não pode ser contemplado pela palavra religião, já que 
              acreditamos em uma causa que pertence a um povo de luta e resistência, e 
              entender isso é fundamental para estar e pertencer à nossa comunidade.
            </p>

            <p className="align-center">
              Que Ògún lhe abençoe 🙏
              <br />
              Axé!
            </p>
          </div>
          <img
            src={img}
            alt="Logo Comunidade Ògún Onirê - Rosto do orixá Ògún em formato de inhame (oval), pintado com as cores de Ògún Onirê: azul, verde e vermelho"
          ></img>
        </div>
      </Presentation>
    </Section>
  );
}
