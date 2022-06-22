import React from 'react';
import styled from 'styled-components';
import Logo from '../components/v2/logo/Logo';

const HeaderConteiner = styled.header`
  position: relative;
  width: auto;
  padding: 3rem;
  background-color: ${props => props.theme.colors.darkblue1};
  color: ${props => props.theme.colors.white1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Header(props) {
  return (
    <HeaderConteiner>
      <Logo {...props} />
    </HeaderConteiner>
  )
}