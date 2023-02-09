import React from 'react';
import styled from 'styled-components';
import Logo from '../components/v2/logo/Logo';

import LoginIconButton from '../components/v2/buttons/LoginIconButton';

const HeaderConteiner = styled.header`
  position: relative;
  width: auto;
  padding: 3rem;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.white1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export default function Header(props) {
  return (
    <HeaderConteiner>
      <Logo logoType="white" {...props} />
      <LoginIconButton icon={["fas", "door-open"]} text="Entrar" top="0" right="0" to={"/entrar"} />
    </HeaderConteiner>
  )
}