import React from "react";
import styled, { keyframes } from "styled-components";

import logo from "../../../assets/identidade/logo-horizontal-3.svg";

const RotateAnimation = keyframes`  
  0% { transform: scale(1) }
  100% { transform: scale(1.3) }
`;

const LoadingConteiner = styled.div`
  background-color: ${(props) => props.theme.colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;

  .logo-img {
    width: 50%;
    height: 50%;
    animation-duration: 2s;
    animation-name: ${RotateAnimation};
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
`;

export default function Loading() {
  return (
    <LoadingConteiner>
      <img src={logo} alt="Logo terreiro sete espadas" />
    </LoadingConteiner>
  );
}
