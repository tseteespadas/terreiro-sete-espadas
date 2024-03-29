import React from "react";
import styled from "styled-components";

import UserArea from "../../../components/v2/user/UserArea";
import { useUser } from "../../../store";

import logo from "../../../assets/identidade/logo-horizontal-3-no-bg.svg";
import { Link } from "react-router-dom";

const HeaderConteiner = styled.header`
  position: relative;
  width: auto;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: space-between;

  img {
    width: 10rem;
  }
`;

export default function Header() {
  const user = useUser();
  console.log(user);
  return (
    <HeaderConteiner>
      <Link to="/dashboard">
        <img
          src={logo}
          alt="Logo Comunidade Ògún Onirê - Rosto do orixá Ògún em formato de inhame (oval), pintado com as cores de Ògún Onirê: azul, verde e vermelho"
        />
      </Link>
      <UserArea
        email={user?.email}
        name={user?.name}
        avatarUrl={user?.avatarUrl}
      />
    </HeaderConteiner>
  );
}
