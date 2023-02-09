import React from "react";
import styled from "styled-components";

import { monthToString } from "../../../../helpers/calendar";

const CalendarEventHeaderConteiner = styled.section`
  display: flex;
  width: 100%;
  position: relative;
  h2 {
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme.colors.white1};
    font-size: 1.2rem;
    @media (min-width: 830px) {
      font-size: 1.5rem;
    }
  }
`;

export default function CalendarEventHeader(props) {
  const { selectedCalendarDate } = props;
  return (
    <CalendarEventHeaderConteiner>
      {selectedCalendarDate ? (
        <h2>
          {selectedCalendarDate.date} de{" "}
          {monthToString[selectedCalendarDate.month]} de{" "}
          {selectedCalendarDate.year}
        </h2>
      ) : null}
    </CalendarEventHeaderConteiner>
  );
}
