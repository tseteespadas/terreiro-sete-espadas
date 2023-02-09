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
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  transition: height 2s;
  cursor: pointer;
  &.expanded {
    padding: 12px;
    width: 250px;
    height: fit-content;
    border-radius: 8px;
    border-top-right-radius: 0px;
    flex-direction: column;
    transition: height 2s;
    &::before {
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      content: "\f078";
      text-align: center;
      position: absolute;
      font-weight: 900;
      background-color: ${(props) => props.theme.colors.blue};
      color: ${(props) => props.theme.colors.white};
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
      role={"button"}
      onClick={() => setExpanded((prev) => !prev)}
      className={expanded && "expanded"}
    >
      {expanded &&
        menuItems.map((item) => <MenuItem key={item.id} item={item} />)}
      {!expanded && <FontAwesomeIcon icon={["fas", "bars"]} />}
    </MenuConteiner>
  );
}
