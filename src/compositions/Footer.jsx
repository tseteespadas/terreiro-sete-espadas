import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Section from "../components/v2/conteiners/Section";

import { theme } from "../styles/theme";

const FooterSection = styled(Section)`
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  p,
  span {
    text-align: center;
    color: #ffffff;
    margin: 0;
  }

  .logo {
    position: relative;
    width: 4rem;
    height: 4rem;

    span {
      font-size: 2rem;
      line-height: 2rem;
      color: ${(props) => props.theme.colors.red};
    }

    span:first-child {
      position: absolute;
      top: 50%;
      left: 35%;
      translate: -20% -50%;
    }
    span:last-child {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -20% -50%;
    }
  }

  a {
    color: ${(props) => props.theme.colors.white};
  }
`;

export default function Footer() {
  return (
    <FooterSection className="pd-bottom bg-black" id="footer">
      <div className="logo">
        <span>J</span>
        <span>S</span>
      </div>
      <div className="presentation">
        <p>Desenvolvido por:</p>
        <p>
          <a
            href="https://www.linkedin.com/in/jefferson-sarti/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jefferson Sarti
          </a>
        </p>
      </div>
    </FooterSection>
  );
}
