import React from "react";
import styled from "styled-components";

const UserSelectConteiner = styled.div`
  width: 25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2em 0;

  label {
    width: 50%;
    color: ${(props) => props.theme.colors.darkblue1};
  }

  select {
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid ${props => props.theme.colors.darkblue1};
    color: ${(props) => props.theme.colors.black1};
    text-align: center;

    option {
      font-size: 1rem;
      color: ${(props) => props.theme.colors.black1};
    }
  }
`;

export default function UserSelect(props) {
  const { handleSelect, label, id, users } = props;
  return (
    <UserSelectConteiner>
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={handleSelect}>
        <option value="">Selecione os usuários</option>
        {users.map(({ name, user_id }) => {
          return (
            <option
              key={`select-${user_id}`}
              value={user_id}
            >
              {name}
            </option>
          );
        })}
      </select>
    </UserSelectConteiner>
  );
}
