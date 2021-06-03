import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const ContatoWrapper = styled.section`
  position: relative;
  padding: 0 3rem 3rem;
  background-color: ${(props) => props.theme.colors.white1};
  height: auto;
  width: auto;
`;

const ContatoConteiner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .contato-description {
    display: flex;
    flex-direction: column;
    width: min(100%, 50em);

    h2 {
      position: relative;
      font-size: 2em;
      font-weight: 700;
      margin: 1.75em 0;
      letter-spacing: 0.025em;
      color: ${(props) => props.theme.colors.darkblue3};
      text-align: center;
      &::after {
        position: absolute;
        content: "";
        bottom: -0.0125em;
        left: 0;
        right: 0;
        border-bottom: 2px solid ${(props) => props.theme.colors.darkblue3};
      }
    }

    h3 {
      position: relative;
      font-size: 1.7em;
      font-weight: 700;
      margin: 1.75em 0;
      letter-spacing: 0.025em;
      color: ${(props) => props.theme.colors.darkblue3};
      text-align: center;
    }

    p,
    a {
      color: black;
      margin: 0;
      letter-spacing: 0.015em;
      font-size: 1.25rem;
      .icon {
        font-size: 1.2em;
        margin: 0 1em 0 0;
      }
    }

    .underline {
      text-decoration: underline;
    }

    .endereco {
      p {
        display: flex;
        align-items: center;
        margin-bottom: 1em;
        .icon {
          font-size: 1.5em;
        }
      }
    }

    .redes-sociais {
      display: flex;
      flex-direction: column;
      p,
      a {
        color: black;
        display: flex;
        align-items: center;
        margin: 0;
        .icon {
          font-size: 1.2em;
          margin: 0 1em 0 0;
        }
      }
    }

    .giras {
      h3 {
        margin-top: 0;
      }
      .t-center {
        display: block;
        text-align: center;
      }
      .a {
        display: block;
      }
    }
  }
`;

export default function Contato() {
  return (
    <ContatoWrapper id="contato">
      <ContatoConteiner>
        <div className="contato-description">
          <h2>Contato</h2>
          <div className="giras">
            <h3>Giras</h3>
            <p className="t-center">Devido à pandemia de <a className="underline" href="https://covid.saude.gov.br/" target="_blank">COVID-19</a>, nossas giras públicas estão suspensas.</p>
            <p className="t-center">Fique de olho nas nossas redes sociais para acompanhar todas as novidades.</p>
            <p className="t-center">Usem máscara, evitem sair de casa e se protejam. Em breve estaremos juntos novamente! <br/> Axé!</p>
          </div>
          <div className="endereco">
            <h3>
              Endereço
            </h3>
            <p>
              <span className="icon">
                <FontAwesomeIcon icon={["fas", "map-marked"]} />
              </span>
              Rua Engenheiro Reynaldo Cajado, nº 84
              <br />
              CEP: 03061-030 - Tatuapé/SP
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.899186995021!2d-46.585879685189006!3d-23.53612808469541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5eda09d765f5%3A0xec620d8fc24c4fc7!2sRua%20Engenheiro%20Reynaldo%20Cajado%2C%2084%20-%20Tatuap%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003061-030!5e0!3m2!1sen!2sbr!4v1622383599162!5m2!1sen!2sbr"
              style={{ border: 0, width: "100%", maxWidth: "100%", minHeight: "20em", margin: "0 auto", display: "block" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="redes-sociais">
            <h3>
              Entre em contato conosco e acesse nossas redes sociais para ficar por dentro de todas as
              novidades:
            </h3>
            <p>
              <span className="icon">
                <FontAwesomeIcon icon={["fab", "whatsapp"]} />
              </span>
              (11) 95204-2805
            </p>

            <p>
              <span className="icon">
                <FontAwesomeIcon icon={["fas", "envelope"]} />
              </span>
              tseteespadas@gmail.com
            </p>

            <a
              href="https://www.instagram.com/terreiroseteespadas/"
              target="_blank"
            >
              <span className="icon">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </span>
              @terreiroseteespadas
            </a>

            <a
              href="https://www.facebook.com/terreiroseteespadas"
              target="_blank"
            >
              <span className="icon">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </span>
              @terreiroseteespadas
            </a>
          </div>
        </div>
      </ContatoConteiner>
    </ContatoWrapper>
  );
}
