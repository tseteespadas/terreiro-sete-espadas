import React from "react";
import styled from "styled-components";

import UserRow from "./UserRow";
import NewUserRow from "./NewUserRow";

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

export default function UsersTable(props) {
  const { users, handleUpdate, handleRemove, handleCreate, showNewUserRow, closeNewUserRow } = props;
  return (
    <StyledTable>
      <caption>Tabela de Usuários. Contém colunas Id, Nome, Email, Confirmado e Opções.</caption>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Confirmado</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow key={user.user_id} user={user} handleUpdate={handleUpdate} handleRemove={handleRemove} />
        ))}
        {showNewUserRow ? (<NewUserRow handleSave={handleCreate} handleDiscard={closeNewUserRow} />) : null }
      </tbody>
    </StyledTable>
  );
}
