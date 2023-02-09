import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  useSelectedCalendarDate,
  useSetSelectedCalendarDate,
  useUser,
} from "../../../../store";

const EventConteiner = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.colors.blue};
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  
  @media (min-width: 830px) {
    width: clamp(400px, 40vw, 1000px);
    padding: 1rem;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  &.open {
    display: flex;
    flex-direction: column;
  }
  .controls {
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button,
    button:hover,
    button:focus {
      background-color: transparent;
      .icon {
        font-size: 1.25rem;
        color: ${(props) => props.theme.colors.white1};
        
        @media (min-width: 830px) {
          font-size: 2rem;
        }
      }
    }
  }
`;

export default function CalendarEventConteiner(props) {
  const { children, handleClickAddEvent, showNewEventForm } = props;
  const setSelectedCalendarDate = useSetSelectedCalendarDate();
  const selectedCalendarDate = useSelectedCalendarDate();

  const user = useUser();

  const handleClose = useCallback(() => {
    setSelectedCalendarDate(null);
  }, []);

  useEffect(() => {
    return () => {
      setSelectedCalendarDate(null);
    }
  }, [])

  return (
    <EventConteiner className={selectedCalendarDate !== null ? "open" : ""}>
      <div className="controls">
        <button className="close-button" onClick={handleClose}>
          <FontAwesomeIcon className="icon" icon={["fas", "chevron-left"]} />
        </button>
        {user?.role === "admin" && !showNewEventForm ? (
          <button className="add-button" onClick={handleClickAddEvent}>
            <FontAwesomeIcon className="icon" icon={["fas", "calendar-plus"]} />
          </button>
        ) : null}
      </div>
      {children}
    </EventConteiner>
  );
}
