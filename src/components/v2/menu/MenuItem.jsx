import React, { useCallback } from "react";
import styled from "styled-components";

const MenuItemConteiner = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

const MenuItemLink = styled.a`
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white2};
  line-height: 1.2;
  &:hover {
    color: ${(props) => props.theme.colors.white2};
  }
`;

export default function MenuItem(props) {
  const { item } = props;
  
  const scrollToView = useCallback((e) => {
    e.preventDefault();
    const el = document.getElementById(e.target.getAttribute("data-scrollTo"));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  }, []);

  return (
    <MenuItemConteiner>
      {item.scrollto && (
        <MenuItemLink
          onClick={scrollToView}
          href={item.link}
          data-scrollTo={item.scrollto}
        >
          {item.name}
        </MenuItemLink>
      )}
      {!item.scrollto && (
        <MenuItemLink href={item.link}>{item.name}</MenuItemLink>
      )}
    </MenuItemConteiner>
  );
}
