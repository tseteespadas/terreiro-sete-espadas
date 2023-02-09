import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "../../../../store";

const UsersTableRow = styled.tr`
  &.editing {
    background-color: ${(props) => props.theme.colors.lightblue1} !important;
  }
`;

const UserRowControlls = styled.div`
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

const UserInput = styled.input`
  border-bottom: 1px solid ${(props) => props.theme.colors.darkblue1};
  background-color: transparent;
`;

export default function UserRow(props) {
  const { user: userData, handleUpdate, handleRemove } = props;
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");

  const user = useUser();

  const handleClickEditButton = useCallback((event) => {
    setEditing(true);
  }, []);

  const handleClickRemoveButton = useCallback(() => {
    handleRemove(userData.user_id);
  }, [userData]);

  const handleClickSaveButton = useCallback(() => {
    const updatedUser = {
      user_id: userData.user_id,
      name: editedName || userData.name,
      email: editedEmail || userData.email,
    };
    handleUpdate(updatedUser);
  }, [userData, editedName, editedEmail]);

  const handleClickDiscardButton = useCallback(() => {
    setEditedName(userData.name);
    setEditedEmail(userData.email);
    setEditing(false);
  }, [userData]);

  const handleChangeName = useCallback((event) => {
    setEditedName(event.target.value);
  }, []);

  const handleChangeEmail = useCallback((event) => {
    setEditedEmail(event.target.value);
  }, []);

  return (
    <UsersTableRow className={editing ? "editing" : ""}>
      <td>{userData.user_id}</td>
      <td>
        {!editing ? (
          userData.name
        ) : (
          <UserInput
            type="text"
            defaultValue={editedName || userData.name}
            onChange={handleChangeName}
          />
        )}
      </td>
      <td>
        {!editing ? (
          userData.email
        ) : (
          <UserInput
            type="text"
            defaultValue={editedEmail || userData.email}
            onChange={handleChangeEmail}
          />
        )}
      </td>
      <td>{userData.confirmed ? "Confirmado" : "À confirmar"}</td>
      <td>
        {user.role === "admin" && !editing ? (
          <UserRowControlls>
            <button onClick={handleClickEditButton}>
              <FontAwesomeIcon className="icon" icon={["fas", "pencil-alt"]} />
            </button>
            <button onClick={handleClickRemoveButton}>
              <FontAwesomeIcon className="icon" icon={["fas", "trash"]} />
            </button>
          </UserRowControlls>
        ) : null}
        {editing ? (
          <UserRowControlls>
            <button onClick={handleClickSaveButton}>
              <FontAwesomeIcon className="icon" icon={["fas", "save"]} />
            </button>
            <button onClick={handleClickDiscardButton}>
              <FontAwesomeIcon className="icon" icon={["fas", "redo"]} />
            </button>
          </UserRowControlls>
        ) : null}
      </td>
    </UsersTableRow>
  );
}
