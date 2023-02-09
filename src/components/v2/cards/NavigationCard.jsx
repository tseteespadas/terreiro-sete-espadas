import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const NavigationCardConteiner = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: clamp(250px, 33vw, 25rem);
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 1rem;
  background-color: ${props => props.theme.colors.black};
  padding: 1.5rem;
  cursor: pointer;

  h2 {
    margin-bottom: .7em;
  }

  h2,
  p {
    color: ${props => props.theme.colors.white};
    width: 100%;
    text-align: center;
  }

  .icon {
    font-size: 3rem;
    color: ${(props) => props.theme.colors.gold};
    margin-bottom: .5em;
  }

`;

export default function NavigationCard(props) {
  const { name, path, description, icon } = props;
  const history = useHistory();

  const onClick = (e) => {
    e.preventDefault();
    history.push(path);
  }

  return (
    <NavigationCardConteiner onClick={onClick} role="navigation">
      <h2>{name}</h2>
      <FontAwesomeIcon className="icon" icon={icon} />
      <p>{description}</p>
    </NavigationCardConteiner>
  );
}
