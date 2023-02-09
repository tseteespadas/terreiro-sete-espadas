import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useCallback } from "react";
import styled from "styled-components";
import UserIcon from "./UserIcon";

const UserAreaConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .user-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-right: 1em;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0;
    @media (max-width: 500px) {
      display: none;
    }
    &.name {
      color: ${(props) => props.theme.colors.white1};
    }
    &.email {
      color: ${(props) => props.theme.colors.white2};
    }
  }
`;

const UserPanelConteiner = styled.div`
  position: absolute;
  height: max-content;
  width: 200px;
  background-color: ${(props) => props.theme.colors.red};
  z-index: 10;
  top: 100px;
  right: 0;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 0.5rem;

  &::after {
    position: absolute;
    top: -5px;
    right: 35px;
    content: '';
    /* background-color: ${props => props.theme.colors.red}; */
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid ${props => props.theme.colors.red};
  }

  button {
    position: relative;
    background-color: transparent;
    padding: 0.5rem;
    color: ${(props) => props.theme.colors.white};
    display: grid;
    grid-template-columns: 40% 60%;
    .icon, 
    span {
      margin-left: 2em;
      place-self: center;    
      justify-self: start;
    }

    .icon {
      transition: all 0.5s ease-in;
    }
    &:hover,
    &:focus {
      .icon {
        margin-left: 70%;
      }
    }
  }
`;
import {
  useSetToken,
  useSetUser,
  useSetMenuItems,
} from "../../../store";

export default function UserArea(props) {
  const { name, email } = props;
  const setToken = useSetToken();
  const setUser = useSetUser();
  const setMenuItems = useSetMenuItems();
  const [showUserPanel, setShowUserPanel] = useState(false);

  const handleIconClick = useCallback(() => {
    setShowUserPanel((prev) => !prev);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("menu");
    setToken(null);
    setUser(null);
    setMenuItems([]);
  }, [])

  return (
    <>
      <UserAreaConteiner>
        <div className="user-info">
          <p className="name">{name}</p>
          <p className="email">{email}</p>
        </div>
        <UserIcon handleClick={handleIconClick} />
      </UserAreaConteiner>
      {showUserPanel ? (
        <UserPanelConteiner>
          <button onClick={handleLogout}>
            <FontAwesomeIcon className="icon" icon={['fas', 'sign-out-alt']} />
            <span>Sair</span>
          </button>
        </UserPanelConteiner>
      ) : null}
    </>
  );
}
