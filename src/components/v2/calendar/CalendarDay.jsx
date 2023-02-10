import React, { useCallback } from "react";
import styled from "styled-components";
import {
  useSetSelectedCalendarDate,
  useSelectedCalendarDate,
  useUser,
} from "../../../store";

const CalendarDayConteiner = styled.div`
  width: 2rem;
  height: 2rem;
  border: 0.25rem solid transparent;
  background-color: ${(props) => props.theme.colors.darkblue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  border-radius: 0.5rem;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.2);

  @media (min-width: 720px) {
    width: 2.75rem;
    height: 3.25rem;
    border: 0.75rem solid transparent;
  }

  @media (min-width: 830px) {
    width: 4rem;
    height: 4.5rem;
    border: 0.75rem solid transparent;
  }

  &.selectable,
  &.has-events {
    cursor: pointer;
    p {
      cursor: pointer;
    }
  }

  p {
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.white1};
    margin: 0;

    @media (min-width: 720px) {
      font-size: 1.3rem;
    }
    @media (min-width: 830px) {
      font-size: 2rem;
    }
  }

  &.has-events {
    background-color: ${(props) => props.theme.colors.green};
  }

  &:hover&:not(.disabled) {
    background-color: ${(props) => props.theme.colors.darkgreen};
  }
  &.selected {
    background-color: ${(props) => props.theme.colors.darkgreen};
  }

  &.disabled {
    box-shadow: none;
    background-color: #3e4343;
    cursor: not-allowed;
  }
`;

export default function CalendarDay(props) {
  const { day, month, year, hasEvents, disabled } = props;
  const user = useUser();
  const selectedCalendarDate = useSelectedCalendarDate();
  const setSelectedCalendarDate = useSetSelectedCalendarDate();
  const handleDayClick = useCallback(() => {
    if ((hasEvents || user?.role === "admin") && !disabled) {
      setSelectedCalendarDate({ date: day, month, year });
    }
  }, [day, month, year, hasEvents, disabled, user]);

  const classNames = [];
  if (user?.role === "admin") {
    classNames.push("selectable");
  }

  if (
    day === selectedCalendarDate?.date &&
    month === selectedCalendarDate?.month &&
    year === selectedCalendarDate?.year
  ) {
    classNames.push("selected");
  }

  if (disabled) {
    classNames.push("disabled");
  }

  if (hasEvents) {
    classNames.push("has-events");
  }

  return (
    <CalendarDayConteiner
      onClick={handleDayClick}
      className={classNames.join(" ")}
    >
      {!disabled ? <p>{day}</p> : null}
    </CalendarDayConteiner>
  );
}
