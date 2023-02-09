import React, { useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserRowControlls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;

  button {
    background-color: transparent;
    display: flex;
    .icon {
      font-size: 1rem;
      color: ${(props) => props.theme.colors.black1};
    }
  }
`;


export default function UserRow(props) {
  const { group, user, handleRemove } = props;

  const handleClickRemoveButton = useCallback(() => {
    handleRemove({group_id: group.group_id, user_id: user.user_id});
  }, [group, user]);

  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <UserRowControlls>
          <button onClick={handleClickRemoveButton}>
            <FontAwesomeIcon className="icon" icon={["fas", "trash"]} />
          </button>
        </UserRowControlls>
      </td>
    </tr>
  );
}
