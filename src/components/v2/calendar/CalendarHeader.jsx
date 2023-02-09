import React from "react";
import styled from "styled-components";
import CalendarFilter from "./CalendarFilter";

const CalendarHeaderConteiner = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CalendarWeekNamesConteiner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  position: relative;

  p {
    width: 100%;
    text-align: center;
    font-size: 0.6rem;
    color: ${(props) => props.theme.colors.white1};
    
    @media (min-width: 720px) {
      font-size: 0.8rem;
    }

    @media (min-width: 830px) {
      font-size: 1rem;
    }
  }
`;

export default function CalendarHeader(props) {
  const { month, year, handleChangeFoward, handleChangeBackward } = props;
  return (
    <CalendarHeaderConteiner>
      <CalendarFilter
        month={month}
        year={year}
        handleChangeFoward={handleChangeFoward}
        handleChangeBackward={handleChangeBackward}
      />
      <CalendarWeekNamesConteiner>
        <p>Dom</p>
        <p>Seg</p>
        <p>Ter</p>
        <p>Qua</p>
        <p>Qui</p>
        <p>Sex</p>
        <p>Sab</p>
      </CalendarWeekNamesConteiner>
    </CalendarHeaderConteiner>
  );
}
