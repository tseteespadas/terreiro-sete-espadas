import React from "react";

import Section from "../../../components/v2/conteiners/Section";
import { EventPresentation } from "../../../components/v2/conteiners/Presentation";

import feijoadaImg from "../../../assets/3a-edicao-feijoada.jpeg";
import { theme } from "../../../styles/theme";

export default function Feijoada() {
  return (
    <Section id="evento" bgColor={theme.colors.black}>
      <EventPresentation titleAlign="right" txtColor={theme.colors.white}>
        <div className="description">
          <h2>2ª Edição da Feijoada do Seu Zé</h2>
          <img
            className="img"
            src={feijoadaImg}
            alt="3ª Edição da Feijoada do Seu Zé. Imagem conta com a logo da Comunidade Ògún Onirê e logo abaixo, o título do evento na cor branca. Ao fundo, à esquerda: recorte de uma estatueta de Seu Zé Pelintra com elementos de trabalho ao lado. À direita: um prato de feijoada."
          ></img>
          <img
            className="img-sm"
            src={feijoadaImg}
            alt="3ª Edição da Feijoada do Seu Zé. Imagem conta com a logo da Comunidade Ògún Onirê e logo abaixo, o título do evento na cor branca. Ao fundo, à esquerda: recorte de uma estatueta de Seu Zé Pelintra com elementos de trabalho ao lado. À direita: um prato de feijoada."
          ></img>
          <div className="content pd-right">
            <p>
              <span className="ml-4">Feijoada</span> do Seu Zé Pelintra: Samba, Sabor e Axé!
              Vem aí mais uma edição da Feijoada do Seu Zé, um dia de celebração à ancestralidade, regado ao melhor do samba com <a href="https://www.instagram.com/sambadeifeoficial/" target="_blank" rel="noopener noreferrer">@sambadeifeoficial</a>, feijoada de respeito, caipirinha no capricho e aquele bingo cheio de sorte!
            </p>
            <br />
            <p>
              <span className="ml-4">A</span> feijoada é mais que um prato, é um rito de resistência, união e celebração! E aqui, a cada garfada, reverenciamos nossa história e honramos Seu Zé Pelintra, com muita alegria, ritmo e energia.
            </p>
            <br />
            <p>
              <span className="ml-4">Além</span> da deliciosa feijoada e do melhor samba, teremos um bingo especial no dia para testar sua sorte e trazer ainda mais diversão e energia para a celebração.
            </p>
            <br />
            <p>
              🗓️ Data: 9 de maio
              <br></br>
              💲 Valor: R$ 55,00
              <br></br>
              🕛 Horário: à partir das 13h00
              <br></br>
              📍Local: Comunidade Ògún Onirê - Rua Doutor Costa Valente, 232 - Brás, São Paulo
              <br></br>
              Ingressos no link: <a href="https://www.sympla.com.br/evento/3-edicao-da-feijoada-do-seu-ze/3385360?referrer=linktr.ee&referrer=linktr.ee&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleARh2opleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacsp9v4lQip73ibiZP9OFJQrcwBuujXxYhl3_6vf_KnmvHGIF3ZkQgT4WRgTQ_aem_4roFXalmHVt8QwxyjXCAEA">Sympla</a>
            </p>
          </div>
        </div>
      </EventPresentation>
    </Section>
  );
}
