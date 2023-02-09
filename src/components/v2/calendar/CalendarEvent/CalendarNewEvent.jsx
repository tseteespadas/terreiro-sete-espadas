import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalendarEventSelect from "../../forms/HourSelect";
import CalendarTextInput from "../../forms/TextInput";
import CalendarTextArea from "../../forms/TextArea";
import CalendarEventGroupSelect from "../../forms/GroupSelect";
import { useGroups } from "../../../../store";
import EventGroup from "./EventGroup";

const CalendarEventConteiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 0.75rem;
  .event-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 100%;
      h3,
      p {
        color: ${(props) => props.theme.colors.white1};
        margin: 0;
      }
    }
    .event-controls {
      display: flex;
      gap: 1em;
      button {
        background-color: transparent;

        .icon {
          color: ${(props) => props.theme.colors.white1};
          font-size: 1rem;
        }
      }
    }
  }
  .description {
    p {
      color: ${(props) => props.theme.colors.white1};
      font-size: 1rem;
    }
  }
  .groups {
    margin-bottom: 0.75rem;
    display: flex;
    gap: 0.3em;
    flex-wrap: wrap;

    button {
      background-color: transparent;
      .icon {
        font-size: 0.75rem;
        color: ${(props) => props.theme.colors.white1};
      }
    }
  }
  .event-general-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      color: ${(props) => props.theme.colors.white1};
      font-size: 0.7rem;
    }
  }
  .event-change-controll {
    display: flex;
    gap: 1em;
    button {
      background-color: transparent;
      .icon {
        color: ${(props) => props.theme.colors.white1};
        font-size: 1.5rem;
      }
    }
  }
`;

export default function CalendarNewEvent(props) {
  const { handleSaveChanges, handleDiscardChanges, date, month, year, loading } = props;
  const [fromHour, setFromHour] = useState(10);
  const [toHour, setToHour] = useState(20);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [groups, setGroups] = useState([]);

  const allGroups = useGroups();

  const handleFromHourSelect = useCallback((e) => {
    setToHour(parseInt(e.target.value));
  }, []);

  const handleToHourSelect = useCallback((e) => {
    setToHour(parseInt(e.target.value));
  }, []);

  const handleNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleDescriptionChange = useCallback((e) => {
    setDescription(e.target.value);
  }, []);

  const handleAddGroup = useCallback(
    (e) => {
      setGroups([
        ...groups,
        allGroups.find(({ group_id }) => group_id === e.target.value),
      ]);
    },
    [allGroups, groups]
  );

  const handleRemoveGroup = useCallback((id) => {
    setGroups(
      groups.filter(({ group_id }) => group_id !== id)
    )
  }, [groups]);

  const handleSave = useCallback(() => {
    const event = {
      name: name,
      description: description,
      groups: groups.map(({ group_id}) => group_id ),
      fromHour: fromHour,
      toHour: toHour,
      date: new Date(year, month, date, 12),
    };
    handleSaveChanges(event);
    setFromHour(null);
    setToHour(null);
    setName(null);
    setDescription(null);
  }, [
    name,
    description,
    groups,
    fromHour,
    toHour,
    handleSaveChanges,
    date,
    month,
    year,
  ]);

  const addedGroupIds = groups.map(({ group_id }) => group_id);

  return (
    <CalendarEventConteiner>
      <div className="event-header">
        <div className="info">
          <CalendarTextInput
            handleChange={handleNameChange}
            label="Nome"
            id="event-name"
            defaultValue={name}
          />
          <CalendarEventSelect
            handleSelect={handleFromHourSelect}
            defaultValue={fromHour}
            label="de"
            id="event-fromHour"
          />
          <CalendarEventSelect
            handleSelect={handleToHourSelect}
            defaultValue={toHour}
            label="até"
            id="event-toHour"
          />
        </div>
      </div>
      <div className="description">
        <CalendarTextArea
          id="event-description"
          defaultValue={description}
          handleChange={handleDescriptionChange}
        />
      </div>
      <div className="groups">
        {groups.map((group) => (
          <EventGroup
            key={group.group_id}
            group_id={group.group_id}
            group_name={group.group_name}
            handleClickRemoveGroup={handleRemoveGroup}
            allowRemove
          />
        ))}
        <CalendarEventGroupSelect
          handleSelect={handleAddGroup}
          label={"Grupos"}
          id="select-grupos"
          groups={allGroups.filter((g) => !addedGroupIds.includes(g.group_id))}
        />
      </div>

      <div className="event-change-controll">
        <button className="save-changes" onClick={handleSave}>
          <FontAwesomeIcon className="icon" icon={["fas", "save"]} />
        </button>
        <button className="discard-changes" onClick={handleDiscardChanges}>
          <FontAwesomeIcon className="icon" icon={["fas", "trash"]} />
        </button>
      </div>
      <hr />
    </CalendarEventConteiner>
  );
}
