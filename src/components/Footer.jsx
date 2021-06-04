import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const FooterWrapper = styled.section`
  position: relative;
  padding: 0 3rem;
  background-color: ${(props) => props.theme.colors.white2};
  height: auto;
  width: auto;
`;

const FooterConteiner = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2em;
  h3 {
    position: relative;
    font-size: 1.75em;
    font-weight: 700;
    margin: 1.75em 0;
    letter-spacing: 0.025em;
    color: ${(props) => props.theme.colors.dark1};
    text-align: center;
    &::after {
      position: absolute;
      content: "";
      bottom: -0.0125em;
      left: 0;
      right: 0;
      border-bottom: 2px solid ${(props) => props.theme.colors.dark1};
    }
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .col {
    flex-basis: 100%;
  }

  p {
    color: ${props => props.theme.colors.dark1};
  }

  .redes-sociais {
    a {
      color: #333333;
      display: flex;
      align-items: center;
      text-decoration: none;
      p {
        margin: 0 0 0 10px;
      }
    }

    a:hover {
      color: #1c1c1c;
      font-weight: 700;
    }
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterConteiner>
        <h3>Terreiro Sete Espadas - Todos os direitos reservados</h3>
        <div className="content">
          <div className="col">
            <div className="redes-sociais">
              <h4>Desenvolvido por Jefferson Sarti</h4>
              <div>
                <a target="_blank" href="https://www.instagram.com/jeff_sarti/" rel="noopeneer norefereer">
                  <FontAwesomeIcon icon={["fab", "instagram-square"]} />
                  <p>@jeff_sarti</p>
                </a>
              </div>
              <div>
                <a target="_blank" href="https://mail.google.com/mail/" rel="noopeneer norefereer">
                  <FontAwesomeIcon icon={["fas", "envelope"]} />
                  <p>jeffersonsarti@gmail.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </FooterConteiner>
    </FooterWrapper>
  );
}
