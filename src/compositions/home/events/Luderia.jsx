import Section from "../../../components/v2/conteiners/Section";
import { EventPresentation } from "../../../components/v2/conteiners/Presentation";

import luderiaImg from "../../../assets/luderia.png";
import { theme } from "../../../styles/theme";

export default function Luderia() {
  return (
    <Section id="evento" bgColor={theme.colors.black}>
      <EventPresentation titleAlign="right" txtColor={theme.colors.white}>
        <div className="description">
          <h2>Dia de Luderia com Flash Tattoo</h2>
          <img
            className="img"
            src={luderiaImg}
            alt="Prepare-se para um dia inesquecível de diversão, arte e boas conexões! 11 de Outubro, das 13h às 22h. Foto com fundo preto, com 4 logos coloridos da comunidade Ògún Onirê representando personagens do PacMan."
          ></img>
          <img
            className="img-sm"
            src={luderiaImg}
            alt="Prepare-se para um dia inesquecível de diversão, arte e boas conexões! 11 de Outubro, das 13h às 22h. Foto com fundo preto, com 4 logos coloridos da comunidade Ògún Onirê representando personagens do PacMan."
          ></img>
          <div className="content pd-right">
            <p>
              <span className="ml-4">Prepare-se</span> para um dia inesquecível
              de diversão, arte e boas conexões!
            </p>
            <br />
            <p>
              <span className="ml-4">Caso</span> No Dia de Luderia com Flash
              Tattoo, você vai encontrar:
              <ul>
                <li>
                  Jogos de tabuleiro, cartas e videogame para todas as idades e
                  estilos;
                </li>
                <li>
                  Comidas deliciosas e bebidas para acompanhar sua experiência;
                </li>
                <li>
                  Flash Tattoo com os tatuadores oficiais da Comunidade Ògún
                  Onire, para quem quiser marcar o momento com uma arte única;
                </li>
                <li>
                  Um ambiente descontraído, cheio de entretenimento do começo ao
                  fim.
                </li>
              </ul>
            </p>
            <br />
            <p>
              <span className="ml-4">Vai</span> ser um dia inteiro de lazer,
              cultura e criatividade, reunindo pessoas que amam jogar,
              compartilhar e se expressar.
            </p>
            <p>
              <b>Data:</b> 11/10/2025
              <br />
              <b>Horário:</b> 13h às 22h
              <br />
              <b>Local:</b> Comunidade Ògún Onire
            </p>
            <br />
            <p>
              <span className="ml-4">Adquira</span> já o seu ingresso via{" "}
              <a href="https://www.sympla.com.br/evento/luderia-com-flash-tattoo/3093334?utm_source=WEBSITE&utm_medium=WEBSITE&utm_campaign=WEBSITE&utm_id=3093334">
                Sympla
              </a>
              . Garanta sua vaga e venha se divertir com a gente!
            </p>
          </div>
        </div>
      </EventPresentation>
    </Section>
  );
}
