import React from "react";
import styled from "styled-components";

import logo from "../assets/identidade/icon-red.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black};

  img {
    width: 200px;
    height: 200px;
  }
`;

export default function Loader() {
  return (
    <Wrapper>
      <img className="logo" src={logo} alt="Logo" />
    </Wrapper>
  );
}

