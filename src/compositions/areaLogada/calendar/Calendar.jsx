import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import CalendarMonth from "../../../components/v2/calendar/CalendarMonth";
import CalendarEventConteiner from "../../../components/v2/calendar/CalendarEvent/CalendarEventConteiner";
import {
  useCalendar,
  useCalendarMonthEvents,
  useSelectedCalendarDate,
  useSetCalendar,
  useSetCalendarMonthEvents,
  useSetGroups,
  useSetSelectedCalendarDate,
  useSetToken,
  useSetUser,
  useToken,
  useUser,
} from "../../../store";
import CalendarEventHeader from "../../../components/v2/calendar/CalendarEvent/CalendarEventHeader";
import CalendarEvent from "../../../components/v2/calendar/CalendarEvent/CalendarEvent";
import CalendarNewEvent from "../../../components/v2/calendar/CalendarEvent/CalendarNewEvent";
import CustomAlert from "../../../components/v2/alert/CustomAlert";
import { CalendarWrapper } from "../../../compositions/areaLogada/calendar/Conteiner";

import api from "../../../services/index";

const CalendarConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.blue};
  width: fit-content;
  border-radius: 1rem;
  position: relative;
  max-width: 85vw;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

const CalendarEventsScrollArea = styled.div`
  height: 100%;
  @media (max-width: 830px) {
    max-height: 50vh;
  }
  padding-right: 0.5rem;
  overflow-y: scroll;
  /* width */
  ::-webkit-scrollbar {
    width: 0.75rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.white1};
    border-radius: 0.5rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.lightblue1};
    border-radius: 0.5rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.lightblue2};
  }
`;

async function fetchEvents(
  calendar,
  setCalendarMonthEvents,
  setError,
  setToken,
  setUser,
  token
) {
  try {
    const { month, year } = calendar;
    const { data } = await api.get(
      `/calendar/events?month=${month}&year=${year}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    setCalendarMonthEvents(data);
  } catch (err) {
    if (err.response) {
      setError(err.response.data.message);
      if (err.response.status === 401 || err.response.status === 419) {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        window.location.href = "/entrar";
      }
    } else {
      setError(
        "Algo inexperado aconteceu. Tente novamente mais tarde e se o erro persistir, entre em contato com um administrador."
      );
    }
  }
}

async function updateEvent(event, setError, setToken, setUser, token) {
  try {
    await api.put(`/calendar/event`, event, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    if (err.response) {
      setError(err.response.data.message);
      if (err.response.status === 401 || err.response.status === 419) {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        window.location.href = "/entrar";
      }
    } else {
      setError(
        "Algo inexperado aconteceu. Tente novamente mais tarde e se o erro persistir, entre em contato com um administrador."
      );
    }
  }
}

async function createEvent(event, setError, setToken, setUser, token) {
  try {
    const { data } = await api.post(`/calendar/event`, event, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    if (err.response) {
      setError(err.response.data.message);
      if (err.response.status === 401 || err.response.status === 419) {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        window.location.href = "/entrar";
      }
    } else {
      setError(
        "Algo inexperado aconteceu. Tente novamente mais tarde e se o erro persistir, entre em contato com um administrador."
      );
    }
  }
}

async function deleteEvent(eventId, setError, setToken, setUser, token) {
  try {
    const { data } = await api.delete(`/calendar/event/${eventId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    if (err.response) {
      setError(err.response.data.message);
      if (err.response.status === 401 || err.response.status === 419) {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        window.location.href = "/entrar";
      }
    } else {
      setError(
        "Algo inexperado aconteceu. Tente novamente mais tarde e se o erro persistir, entre em contato com um administrador."
      );
    }
  }
}

async function fetchGroups(setGroups, setError, setToken, setUser, token) {
  try {
    const { data } = await api.get(`/groups`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setGroups(data.groups);
  } catch (err) {
    if (err.response) {
      setError(err.response.data.message);
      if (err.response.status === 401 || err.response.status === 419) {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        window.location.href = "/entrar";
      }
    } else {
      setError(
        "Algo inexperado aconteceu. Tente novamente mais tarde e se o erro persistir, entre em contato com um administrador."
      );
    }
  }
}

export default function Calendar(props) {
  const [showNewEventForm, setShowNewEventForm] = useState(false);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const calendar = useCalendar();
  const setCalendar = useSetCalendar();
  const token = useToken();
  const setToken = useSetToken();
  const user = useUser();
  const setUser = useSetUser();

  const selectedCalendarDate = useSelectedCalendarDate();
  const calendarMonthEvents = useCalendarMonthEvents();
  const setCalendarMonthEvents = useSetCalendarMonthEvents();
  const setSelectedCalendarDate = useSetSelectedCalendarDate();
  const setGroups = useSetGroups();

  useEffect(() => {
    fetchEvents(
      calendar,
      setCalendarMonthEvents,
      setError,
      setToken,
      setUser,
      token
    );
    if (user.role === "admin") {
      fetchGroups(setGroups, setError, setToken, setUser, token);
    }
    return () => {
      setSelectedCalendarDate(null);
      setCalendarMonthEvents([]);
    };
  }, [calendar, token, user]);

  useEffect(() => {
    if (error) {
      setShowError(true);
    }
  }, [error]);

  const selectedDateEvents = calendarMonthEvents.filter(({ date }) => {
    const d = new Date(date);
    // dessa forma garantimos que os eventos exibidos não
    // serão de outras datas por conta de uma conexão
    // com a internet lenta
    const sameDate =
      d.getDate() === selectedCalendarDate?.date &&
      d.getMonth() === selectedCalendarDate?.month &&
      d.getFullYear() === selectedCalendarDate?.year;
    return sameDate;
  });

  const handleDismissError = useCallback(() => {
    setShowError(false);
    setError(null);
  }, []);

  // controles de filtro
  const handleClickAddEvent = useCallback(() => {
    setShowNewEventForm(true);
  }, []);

  const handleClickDiscardNewEvent = useCallback(() => {
    setShowNewEventForm(false);
  }, []);

  const handleChangeFoward = useCallback(() => {
    setSelectedCalendarDate(null);
    if (calendar.month + 1 > 11) {
      setCalendar({ month: 0, year: calendar.year + 1 });
    } else {
      setCalendar({ month: calendar.month + 1, year: calendar.year });
    }
  }, [calendar]);

  const handleChangeBackward = useCallback(() => {
    setSelectedCalendarDate(null);
    if (calendar.month - 1 < 0) {
      setCalendar({ month: 11, year: calendar.year - 1 });
    } else {
      setCalendar({ month: calendar.month - 1, year: calendar.year });
    }
  }, [calendar]);

  // controles de gerenciamento de dados
  const handleUpdateEvent = useCallback(
    async (event) => {
      setLoading(true);
      await updateEvent(event, setError, setToken, setUser, token);
      await fetchEvents(
        calendar,
        setCalendarMonthEvents,
        setError,
        setToken,
        setUser,
        token
      );
      setLoading(false);
    },
    [calendar, token]
  );

  const handleCreateEvent = useCallback(
    async (event) => {
      setLoading(true);
      await createEvent(event, setError, setToken, setUser, token);
      await fetchEvents(
        calendar,
        setCalendarMonthEvents,
        setError,
        setToken,
        setUser,
        token
      );
      setShowNewEventForm(false);
      setLoading(false);
    },
    [calendar, token]
  );

  const handleDeleteEvent = useCallback(
    async (eventId) => {
      setLoading(true);
      await deleteEvent(eventId, setError, setToken, setUser, token);
      await fetchEvents(
        calendar,
        setCalendarMonthEvents,
        setError,
        setToken,
        setUser,
        token
      );
      setLoading(false);
    },
    [calendar, token]
  );

  return (
    <CalendarWrapper>
      {showError ? (
        <CustomAlert
          variant="warning"
          dismissible={true}
          showError={showError}
          onClose={handleDismissError}
        >
          <p>{error}</p>
        </CustomAlert>
      ) : null}
      <CalendarConteiner>
        <CalendarMonth
          month={calendar.month}
          year={calendar.year}
          handleChangeFoward={handleChangeFoward}
          handleChangeBackward={handleChangeBackward}
          events={calendarMonthEvents}
        />
        <CalendarEventConteiner
          handleClickAddEvent={handleClickAddEvent}
          showNewEventForm={showNewEventForm}
        >
          <CalendarEventHeader selectedCalendarDate={selectedCalendarDate} />
          <CalendarEventsScrollArea>
            {showNewEventForm ? (
              <CalendarNewEvent
                date={selectedCalendarDate?.date}
                month={selectedCalendarDate?.month}
                year={selectedCalendarDate?.year}
                handleSaveChanges={handleCreateEvent}
                handleDiscardChanges={handleClickDiscardNewEvent}
                loading={loading}
              />
            ) : null}
            {selectedDateEvents.length > 0
              ? selectedDateEvents.map((event) => {
                  return (
                    <CalendarEvent
                      key={event.event_id}
                      event_id={event.event_id}
                      {...event}
                      handleDeleteEvent={handleDeleteEvent}
                      handleUpdateEvent={handleUpdateEvent}
                      loading={loading}
                    />
                  );
                })
              : null}
          </CalendarEventsScrollArea>
        </CalendarEventConteiner>
      </CalendarConteiner>
    </CalendarWrapper>
  );
}
