import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItem from "../components/v2/menu/MenuItem";

const MenuConteiner = styled.nav`
  z-index: 100;
  position: fixed;
  bottom: 25px;
  right: 25px;
  display: flex;
  align-items: center;
  border-radius: 50%;
  padding: 1rem;
  width: 50px;
  height: 50px;
  background-color: ${props => props.theme.colors.darkblue4};
  color: ${props => props.theme.colors.white1};
  transition: width 0s, height 0s;
  cursor: pointer;
  &.expanded {
    padding: 12px;
    width: 250px;
    height: fit-content;
    border-radius: 8px;
    border-top-right-radius: 0px;
    flex-direction: column;
    transition: width 0.3s linear, height 0.5s;
    &::before {
      font-family: "Font Awesome 5 Free"; 
      font-weight: 900;
      content: "\f078";
      text-align: center;
      position: absolute;
      font-weight: 900;
      background-color: ${props => props.theme.colors.darkblue4};
      color: ${props => props.theme.colors.white1};
      right: 0;
      top: -17px;
      width: 60px;
      height: 17px;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
    }
  }

  .fa-bars {
    margin-left: 1px;
  }
`;

export default function Menu(props) {
  const { menuItems } = props;
  const [expanded, setExpanded] = useState(false);
  return (
    <MenuConteiner
      onClick={() => setExpanded((prev) => !prev)}
      className={expanded && "expanded"}
    >
      {expanded && menuItems.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
      {!expanded && (
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      )}
    </MenuConteiner>
  );
}
