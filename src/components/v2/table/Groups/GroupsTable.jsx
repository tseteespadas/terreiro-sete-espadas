import React from "react";
import styled from "styled-components";

import GroupRow from "./GroupRow";
import NewGroupRow from "./NewGroupRow";

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

export default function GroupsTable(props) {
  const { groups, handleUpdate, handleRemove, handleCreate, showNewGroupRow, closeNewGroupRow } = props;
  return (
    <StyledTable>
      <caption>Tabela de Grupos de Usuários. Contém colunas Id, Nome e Opções.</caption>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        {groups.map((group) => (
          <GroupRow key={group.group_id} group={group} handleUpdate={handleUpdate} handleRemove={handleRemove} />
        ))}
        {showNewGroupRow ? (<NewGroupRow handleSave={handleCreate} handleDiscard={closeNewGroupRow} />) : null }
      </tbody>
    </StyledTable>
  );
}
