import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RotateAnimation = keyframes`  
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

const LoadingConteiner = styled.div`
  background-color: black;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: absolute;
  inset: 0;

  .icon-loading {
    opacity: 1;
    font-size: 50px;
    color: ${(props) => props.theme.colors.darkblue4};
    animation-duration: 1s;
    animation-name: ${RotateAnimation};
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
`;

export default function Loading() {
  return (
    <LoadingConteiner>
      <FontAwesomeIcon className="icon-loading" icon="fa-solid fa-spinner" />
    </LoadingConteiner>
  );
}
