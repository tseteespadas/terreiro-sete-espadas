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
    display: block;
    border-radius: 50%;
  }
`;

export default function UserIcon(props) {
  const { handleClick, avatarUrl } = props;
  return (
    <UserIconArea onClick={handleClick}>
      {avatarUrl ? (
        <img src={avatarUrl} className="icon"></img>
      ) : (
        <FontAwesomeIcon className="icon" icon={["fas", "user-circle"]} />
      )}
    </UserIconArea>
  );
}
