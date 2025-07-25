import React, { useState } from "react";
import styled from "styled-components";
import { fetchAssistencia } from "../../../../api/giras";
import AssistenciaForm from "../../forms/AssistenciaForm";

const TableWrapper = styled.div`
  overflow-x: auto;
  margin-bottom: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;

  @media (max-width: 768px) {
    min-width: unset;
  }

  th,
  td {
    padding: 12px 8px;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #e4e4e4;
  }

  button {
    padding: 6px 12px;
    border: none;
    background-color: #0084ff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const AssistenciaList = styled.ul`
  list-style: none;
  padding-left: 1rem;
`;

const AssistenciaTable = ({ assistencia }) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Pronomes</th>
            <th>Preferencial</th>
          </tr>
        </thead>
        <tbody>
          {assistencia.map((pessoa, index) => (
            <React.Fragment key={pessoa._id}>
              <tr>
                <td>{index + 1}</td>
                <td>{pessoa.name}</td>
                <td>{pessoa.phone}</td>
                <td>{pessoa.pronoums}</td>
                <td>{pessoa.preferred && <strong> ⭐</strong>}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default AssistenciaTable;
