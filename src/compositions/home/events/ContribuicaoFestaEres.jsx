import Section from "../../../components/v2/conteiners/Section";
import { EventPresentation } from "../../../components/v2/conteiners/Presentation";

import festaEres from "../../../assets/contribuicao-festa-eres.jpg";
import { theme } from "../../../styles/theme";

export default function ContribuicaoFestaEres() {
  return (
    <Section id="evento" bgColor={theme.colors.black}>
      <EventPresentation titleAlign="right" txtColor={theme.colors.white}>
        <div className="description">
          <h2>Contribuições para a Festa dos Erês!</h2>
          <img
            className="img"
            src={festaEres}
            alt="Já estamos recebendo contribuições para a Festa dos Erês! Entre em contato conosco para saber como ajudar."
          ></img>
          <img
            className="img-sm"
            src={festaEres}
            alt="Já estamos recebendo contribuições para a Festa dos Erês! Entre em contato conosco para saber como ajudar."
          ></img>
          <div className="content pd-right">
            <p>
              <span className="ml-4">O</span> mês mais doce do ano está
              chegando!
            </p>
            <br />
            <p>
              <span className="ml-4">Caso</span> você queira contribuir com a
              nossa festa, toda contribuição é bem-vinda.
            </p>
            <br />
            <p>
              <span className="ml-4">Os</span> doces poderão ser entregues nos
              dias das giras abertas e caso preferir contribuir de outras
              formas, entre em contato conosco pelos nossos{" "}
              <a href="#contato">canais de comunicação.</a>
            </p>
            <br />
          </div>
        </div>
      </EventPresentation>
    </Section>
  );
}
