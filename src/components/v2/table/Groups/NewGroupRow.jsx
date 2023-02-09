import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "../../../../store";
import { Link } from "react-router-dom";

const GroupTableRow = styled.tr`
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

  const handleClickSaveButton = useCallback(() => {
    const newGroup = {
      group_name: name,
    };
    setName("");
    handleSave(newGroup);
  }, [name]);

  const handleChangeName = useCallback((event) => {
    setName(event.target.value);
  }, []);

  return (
    <GroupTableRow>
      <td>#</td>
      <td>
        <GroupNameInput
          type="text"
          defaultValue={name}
          onChange={handleChangeName}
        />
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
    </GroupTableRow>
  );
}
