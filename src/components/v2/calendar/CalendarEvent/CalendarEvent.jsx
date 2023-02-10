import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser, useGroups } from "../../../../store";
import CalendarEventSelect from "../../forms/HourSelect";
import CalendarTextInput from "../../forms/TextInput";
import CalendarTextArea from "../../forms/TextArea";
import EventGroup from "./EventGroup";
import CalendarEventGroupSelect from "../../forms/GroupSelect";

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
      h3 {
        font-size: 1rem;
        @media (min-width: 830px) {
          font-size: 1.2rem;
        }
      }
      p {
        font-size: 0.8rem;
        @media (min-width: 830px) {
          font-size: 1rem;
        }
      }
      h3,
      p {
        color: ${(props) => props.theme.colors.white1};
        margin: 0;
      }
    }
    .event-controls {
      display: flex;
      flex-direction: column;
      gap: 0.8em;

      @media (min-width: 830px) {
        flex-direction: row;
        gap: 1rem;
      }
      button {
        background-color: transparent;

        .icon {
          color: ${(props) => props.theme.colors.white1};
          font-size: 1rem;

          @media (min-width: 830px) {
            font-size: 1rem;
          }
        }
      }
    }
  }
  .description {
    p {
      color: ${(props) => props.theme.colors.white1};
      font-size: 0.8rem;

      @media (min-width: 830px) {
        font-size: 1rem;
      }
    }
  }
  .groups {
    margin-bottom: 1rem;
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

export default function CalendarEvent(props) {
  const {
    event_id,
    name,
    description,
    groups,
    fromHour,
    toHour,
    createdAt,
    updatedAt,
    handleUpdateEvent,
    handleDeleteEvent,
    loading,
  } = props;
  const [editing, setEditing] = useState(false);
  const [showGroupsSelect, setShowGroupsSelect] = useState(false);
  const [editedFromHour, setFromHour] = useState(null);
  const [editedToHour, setToHour] = useState(null);
  const [editedName, setName] = useState(null);
  const [editedDescription, setDescription] = useState(null);
  const [editedGroups, setGroups] = useState([]);

  const user = useUser();
  const allGroups = useGroups();

  useEffect(() => {
    if (user?.role === "admin") {
      setGroups(
        groups.map((g) => {
          return allGroups.find(({ group_id }) => group_id === g);
        })
      );
    }
  }, [user, groups, allGroups]);

  const handleEdit = useCallback(() => {
    setEditing((prev) => !prev);
  }, []);

  const handleDelete = useCallback(() => {
    handleDeleteEvent(event_id);
  }, [event_id, handleDeleteEvent]);

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
      const g = allGroups.find((gr) => gr.group_id === e.target.value);

      setGroups([...editedGroups, g]);
    },
    [allGroups, editedGroups]
  );

  const handleClickAddNewGroup = useCallback(() => {
    setShowGroupsSelect(true);
  }, []);

  const handleRemoveGroup = useCallback(
    (group_id) => {
      setGroups(
        editedGroups.filter((group) => {
          return group.group_id !== group_id;
        })
      );
    },
    [editedGroups]
  );

  const handleDiscardChanges = useCallback(() => {
    setFromHour(null);
    setToHour(null);
    setName(null);
    setDescription(null);
    setEditing(false);
  }, []);

  const handleSaveChanges = useCallback(() => {
    const updatedEvent = {
      event_id,
      name: editedName || name,
      description: editedDescription || description,
      groups: editedGroups
        ? editedGroups.map(({ group_id }) => group_id)
        : groups.map(({ group_id }) => group_id),
      fromHour: editedFromHour || fromHour,
      toHour: editedToHour || toHour,
      updatedAt: new Date(),
    };
    console.log({ updatedEvent });
    handleUpdateEvent(updatedEvent);
    setFromHour(null);
    setToHour(null);
    setName(null);
    setDescription(null);
    setEditing(false);
  }, [
    editedFromHour,
    editedToHour,
    editedName,
    editedGroups,
    editedDescription,
    event_id,
    name,
    description,
    groups,
    fromHour,
    toHour,
    createdAt,
    updatedAt,
  ]);

  let addedGroupIds;
  
  if (user?.role === "admin") {
    editedGroups.map((group) => group.group_id);
  }
  return (
    <CalendarEventConteiner>
      <div className="event-header">
        <div className="info">
          {user.role === "admin" && editing ? (
            <CalendarTextInput
              handleChange={handleNameChange}
              disabled={loading}
              label="Nome"
              id="event-name"
              defaultValue={name || editedName}
            />
          ) : (
            <h3>{name}</h3>
          )}
          {user.role === "admin" && editing ? (
            <>
              <CalendarEventSelect
                handleSelect={handleFromHourSelect}
                defaultValue={fromHour || editedFromHour}
                disabled={loading}
                label="de"
                id="event-fromHour"
              />
              <CalendarEventSelect
                handleSelect={handleToHourSelect}
                defaultValue={toHour || editedToHour}
                disabled={loading}
                label="até"
                id="event-toHour"
              />
            </>
          ) : (
            <p>
              <strong>de:</strong> {fromHour}:00 &nbsp;&nbsp;{" "}
              <strong>até:</strong> {toHour}:00
            </p>
          )}
        </div>
        {user.role === "admin" && !editing ? (
          <div className="event-controls">
            <button className="edit" onClick={handleEdit} disabled={loading}>
              <FontAwesomeIcon className="icon" icon={["fas", "pencil-alt"]} />
            </button>
            <button
              className="exclude"
              onClick={handleDelete}
              disabled={loading}
            >
              <FontAwesomeIcon className="icon" icon={["fas", "trash"]} />
            </button>
          </div>
        ) : null}
      </div>
      <div className="description">
        {editing ? (
          <CalendarTextArea
            disabled={loading}
            id="event-description"
            defaultValue={description || editedDescription}
            handleChange={handleDescriptionChange}
          />
        ) : (
          <p>{description}</p>
        )}
      </div>
      {user.role === "admin" ? (
        <div className="groups">
          {editedGroups
            ? editedGroups.map((group) => (
                <EventGroup
                  key={group.group_id}
                  group_id={group.group_id}
                  group_name={group.group_name}
                  allowRemove={editing || loading}
                  handleClickRemoveGroup={handleRemoveGroup}
                />
              ))
            : groups.map((group) => (
                <EventGroup
                  key={group.group_id}
                  group_id={group.group_id}
                  group_name={group.group_name}
                  allowRemove={editing || loading}
                  handleClickRemoveGroup={handleRemoveGroup}
                />
              ))}
          {user.role === "admin" && editing && !showGroupsSelect ? (
            <button className="add-group" onClick={handleClickAddNewGroup}>
              <FontAwesomeIcon className="icon" icon={["fas", "plus"]} />
              <FontAwesomeIcon className="icon" icon={["fas", "users"]} />
            </button>
          ) : null}
          {user.role === "admin" && editing && showGroupsSelect ? (
            <CalendarEventGroupSelect
              handleSelect={handleAddGroup}
              id="select-grupos"
              groups={allGroups.filter(
                (g) => !addedGroupIds.includes(g.group_id)
              )}
            />
          ) : null}
        </div>
      ) : null}
      <div className="event-general-info">
        <p>Criado em: {new Date(createdAt).toLocaleString()}</p>
        <p>Atualizado em: {new Date(updatedAt).toLocaleString()}</p>
      </div>
      {editing ? (
        <div className="event-change-controll">
          <button className="save-changes" onClick={handleSaveChanges}>
            {!loading ? (
              <FontAwesomeIcon className="icon" icon={["fas", "save"]} />
            ) : (
              <FontAwesomeIcon
                className="icon"
                icon={["fas", "spinner"]}
                spin={true}
                speed={10}
              />
            )}
          </button>
          <button className="discard-changes" onClick={handleDiscardChanges}>
            {!loading ? (
              <FontAwesomeIcon className="icon" icon={["fas", "undo-alt"]} />
            ) : (
              <FontAwesomeIcon
                className="icon"
                icon={["fas", "spinner"]}
                spin={true}
                speed={10}
              />
            )}
          </button>
        </div>
      ) : null}
      <hr />
    </CalendarEventConteiner>
  );
}
