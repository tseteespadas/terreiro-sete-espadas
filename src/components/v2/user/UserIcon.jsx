import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const UserIconArea = styled.div`
  display: grid;
  place-content: center;
  width: 3rem;
  height: 3rem;
  position: relative;
  cursor: pointer;

  .icon {
    color: ${(props) => props.theme.colors.white2};
    width: 100%;
    height: 100%;
  }
`;

export default function UserIcon(props) {
  const { handleClick } = props;
  return (
    <UserIconArea onClick={handleClick}>
      <FontAwesomeIcon className="icon" icon={["fas", "user-circle"]} />
    </UserIconArea>
  )
}