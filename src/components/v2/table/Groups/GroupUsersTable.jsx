import React from "react";
import styled from "styled-components";
import UserRow from "./UserRow";

const StyledTable = styled.table`
  border-collapse: collapse;

  th, td {
    border: 1px solid black;
    padding: 0.5em 0.75em;
  }

  th:last-child {
    width: 7rem;
  }

  th:not(:last-child) {
    min-width: 15rem;
  }

  tr:nth-child(even) {
    background-color: rgba(0,0,0,0.05);
  }
`;

export default function GroupUsersTable(props) {
  const { group, users, handleRemove } = props;
  return (
    <StyledTable>
      <caption>Tabela de Usuários do Grupo {group.group_name}</caption>
      <thead>
        <tr>
          <th>Nome Usuário</th>
          <th>Email</th>
          <th>Papel</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow key={user.user_id} group={group} user={user} handleRemove={handleRemove} />
        ))}
      </tbody>
    </StyledTable>
  );
}
