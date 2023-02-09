import React from "react";
import styled from "styled-components";

import CalendarDay from "./CalendarDay";

const CalendarWeekConteiner = styled.div`
  display: grid;
  grid-template-columns: min-content min-content min-content min-content min-content min-content min-content;
  gap: 4px;
`;

export default function CalendarWeek(props) {
  const { weekDays } = props;
  return (
    <CalendarWeekConteiner>
      {weekDays.map((day, index) => {
        return (
          <CalendarDay
            key={`day-${index + 1}`}
            day={day.date}
            hasEvents={day.hasEvents}
            disabled={day.disabled}
            month={day.month}
            year={day.year}
          />
        );
      })}
    </CalendarWeekConteiner>
  );
}
