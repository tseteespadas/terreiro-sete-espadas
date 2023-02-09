import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { monthToString } from "../../../helpers/calendar";

const CalendarFilterConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0;
  gap: 0.25em;

  @media (min-width: 830px) {
    padding: 0.5rem 0;
    gap: 0.75em;
  }

  button,
  button:hover,
  button:focus {
    color: ${props => props.theme.colors.white};
    background-color: transparent;
    padding: 0.5em;
  }

  .current-date {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: ${props => props.theme.colors.white};
      margin: 0 0.25em;
      font: bold 0.7rem/0.9rem Montserrat;
      @media (min-width: 720px) {
        font: bold 0.9rem/1.2rem Montserrat;
      }
      @media (min-width: 830px) {
        font: bold 1.2rem/1.5rem Montserrat;
      }
    }
  }
`;


export default function CalendarFilter(props) {
  const { month, year, handleChangeFoward, handleChangeBackward } = props;

  return (
    <CalendarFilterConteiner>
      <button onClick={handleChangeBackward}>
        <FontAwesomeIcon iconName="icon" icon={["fas", "chevron-left"]} />
      </button>
      <div className="current-date">
        <p className="month">{monthToString[month]}</p>
        <p className="year">{year}</p>
      </div>
      <button onClick={handleChangeFoward}>
        <FontAwesomeIcon iconName="icon" icon={["fas", "chevron-right"]} />
      </button>
    </CalendarFilterConteiner>
  );
}
