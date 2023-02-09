import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "../../../../store";
import { Link } from "react-router-dom";

const NewUserTableRow = styled.tr`
  background-color: ${(props) => props.theme.colors.lightblue1} !important;
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

export default function NewGroupRow(props) {
  const { handleSave, handleDiscard } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleClickSaveButton = useCallback(() => {
    const newUser = {
      name,
      email,
    };
    setName("");
    setEmail("")
    handleSave(newUser);
  }, [name, email]);

  const handleChangeName = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const handleChangeEmail = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  return (
    <NewUserTableRow>
      <td>#</td>
      <td>
        <GroupNameInput
          type="text"
          defaultValue={name}
          onChange={handleChangeName}
        />
      </td>
      <td>
        <GroupNameInput
          type="text"
          defaultValue={email}
          onChange={handleChangeEmail}
        />
      </td>
      <td>
        À confirmar
      </td>
      <td>
        <GroupRowControlls>
          <button onClick={handleClickSaveButton}>
            <FontAwesomeIcon className="icon" icon={["fas", "save"]} />
          </button>
          <button onClick={handleDiscard}>
            <FontAwesomeIcon className="icon" icon={["fas", "redo"]} />
          </button>
        </GroupRowControlls>
      </td>
    </NewUserTableRow>
  );
}
