import React from "react";

import Section from "../../components/v2/conteiners/Section";
import Presentation from "../../components/v2/conteiners/Presentation";

import img from "../../assets/sessao-fotos/sessao-fotos (18) span-2.jpeg";

export default function Terreiro() {
  return (
    <Section id="terreiro" className="pd-top">
      <Presentation titleAlign="left" >
        <div className="description">
          <div className="content pd-right">
            <h2>O Terreiro</h2>
            <p>
              <span className="ml-4">Nosso</span> terreiro foi fundado em
              janeiro de 2005, como Núcleo Umbandista Pai Oxóssi e Mãe Iemanjá,
              em 2019 nos tornamos a Casa de Umbanda das Sete Linhas Sagradas.
              Em janeiro de 2021, fundamos a Comunidade Ògún Onirê, sob a
              liderança do Pai Lucas Maganhato e Mãe Fiama Miranda.
            </p>

            <p>
              <span className="ml-4">Nosso</span> objetivo é resgatar os valores
              ancestrais trazidos pelos nossos guias para dentro da nossa
              comunidade e sociedade, pois acreditamos que umbanda e sociedade
              caminham lado a lado.
            </p>

            <p>
              <span className="ml-4">Este</span> terreiro é um espaço aberto a
              todes que queiram se encantar com a umbanda e que se identificam
              com os valores da nossa comunidade, quais sejam: respeito,
              humildade, amor, autoconhecimento e busca por uma sociedade mais
              inclusiva porque, por aqui, se repudia todo e qualquer pensamento
              e/ou ação que agrida, desrespeite e/ou exclua qualquer indivíduo
              pela sua cor, gênero, religião, sexualidade e origem!
            </p>

            <p className="align-center">
              Que Ògún lhe abençoe 🙏
              <br />
              Axé!
            </p>
          </div>
          <img
            src={img}
            alt="Foto tirada no nível do chão do terreiro, o qual está coberto com folhas verdes. Sobre as folhas há uma imagem de resina do Orixá Ossain. Ao fundo está o congá com velas acesas."
          ></img>
        </div>
      </Presentation>
    </Section>
  );
}
