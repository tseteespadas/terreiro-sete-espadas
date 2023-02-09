import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginIconButtonConteiner = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 1em;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  text-decoration: none;
  color: ${(props) => props.theme.colors.red};

  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.red};
  }

  .icon {
    font-size: 1rem;
  }
`;

const LoginButtonText = styled.p`
  color: ${(props) => props.theme.colors.red};
  font-size: 1rem;
  font-weight: 500;
`;

export default function LoginIconButton(props) {
  const { icon, text, top, right, to } = props;

  return (
    <LoginIconButtonConteiner top={top} right={right} to={to}>
      <FontAwesomeIcon icon={icon} />
      <LoginButtonText>{text}</LoginButtonText>
    </LoginIconButtonConteiner>
  );
}
