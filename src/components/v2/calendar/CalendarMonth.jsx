import React from "react";
import styled from "styled-components";

import CalendarWeek from "./CalendarWeek";
import CalendarHeader from "./CalendarHeader";

import { generateMonthCalendar } from "../../../helpers/calendar";

const CalendarMonthConteiner = styled.div`
  width: fit-content;
  display: grid;
  padding: 0.5rem;
  grid-template-rows: ${(props) => `auto repeat(${props.weekCount}, 1fr)`};
  gap: 4px;
  @media (min-width: 830px) {
    padding: 1rem;
  }
`;

export default function CalendarMonth(props) {
  const { month, year, handleChangeFoward, handleChangeBackward, events } =
    props;
  const monthCalendar = generateMonthCalendar(month, year);
  if (events && events.length) {
    monthCalendar.forEach((week) => {
      week.forEach((day) => {
        const { date, month: dayMonth, year: dayYear } = day;
        if (events.length) {
          day.hasEvents =
            events.filter((event) => {
              const eventDate = new Date(event.date);
              return (
                eventDate.getFullYear() === dayYear &&
                eventDate.getMonth() === dayMonth &&
                eventDate.getDate() === date
              );
            }).length > 0;
        }
      });
    });
  }
  return (
    <CalendarMonthConteiner weekCount={monthCalendar.length}>
      <CalendarHeader
        month={month}
        year={year}
        handleChangeFoward={handleChangeFoward}
        handleChangeBackward={handleChangeBackward}
      />
      {monthCalendar.map((week, index) => {
        return <CalendarWeek weekDays={week} key={`week-${index + 1}`} />;
      })}
    </CalendarMonthConteiner>
  );
}
