import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "../../../../store";
import { Link } from "react-router-dom";

const GroupTableRow = styled.tr`
  &.editing {
    background-color: ${(props) => props.theme.colors.lightblue1} !important;
  }
`;

const GroupRowControlls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;

  button,
  a {
    background-color: transparent;
    display: flex;
    .icon {
      font-size: 1rem;
      color: ${(props) => props.theme.colors.black1};
    }
  }
`;

const GroupNameInput = styled.input`
  border-bottom: 1px solid ${(props) => props.theme.colors.darkblue1};
  background-color: transparent;
`;

export default function GroupRow(props) {
  const { group, handleUpdate, handleRemove } = props;
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState("");

  const user = useUser();

  const handleClickEditButton = useCallback((event) => {
    setEditing(true);
  }, []);

  const handleClickRemoveButton = useCallback(() => {
    handleRemove(group.group_id);
  }, [group]);

  const handleClickSaveButton = useCallback(() => {
    const updatedGroup = {
      group_id: group.group_id,
      group_name: editedName || group.group_name,
    };
    handleUpdate(updatedGroup);
  }, [group, editedName]);

  const handleClickDiscardButton = useCallback(() => {
    setEditedName(group.group_name);
    setEditing(false);
  }, [group]);

  const handleChangeName = useCallback((event) => {
    setEditedName(event.target.value);
  }, []);

  return (
    <GroupTableRow className={editing ? "editing" : ""}>
      <td>{group.group_id}</td>
      <td>
        {!editing ? (
          group.group_name
        ) : (
          <GroupNameInput
            type="text"
            defaultValue={editedName || group.group_name}
            onChange={handleChangeName}
          />
        )}
      </td>
      <td>
        {user.role === "admin" && !editing ? (
          <GroupRowControlls>
            <button onClick={handleClickEditButton}>
              <FontAwesomeIcon className="icon" icon={["fas", "pencil-alt"]} />
            </button>
            <button onClick={handleClickRemoveButton}>
              <FontAwesomeIcon className="icon" icon={["fas", "trash"]} />
            </button>
            <Link to={`/grupos/${group.group_id}`}>
              <FontAwesomeIcon className="icon" icon={["fas", "external-link-alt"]} />
            </Link>
          </GroupRowControlls>
        ) : null}
        {editing ? (
          <GroupRowControlls>
            <button onClick={handleClickSaveButton}>
              <FontAwesomeIcon className="icon" icon={["fas", "save"]} />
            </button>
            <button onClick={handleClickDiscardButton}>
              <FontAwesomeIcon className="icon" icon={["fas", "redo"]} />
            </button>
          </GroupRowControlls>
        ) : null}
      </td>
    </GroupTableRow>
  );
}
