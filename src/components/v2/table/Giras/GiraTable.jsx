import React, { useState } from "react";
import styled from "styled-components";
import { fetchAssistencia } from "../../../../api/giras";
import AssistenciaForm from "../../forms/AssistenciaForm";
import AssistenciaTable from "./AssistenciaTable";

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

const GiraTable = ({ giras, token }) => {
  const [assistencias, setAssistencias] = useState({});
  const [expanded, setExpanded] = useState({});

  const toggleAssistencia = async (giraId) => {
    if (!expanded[giraId]) {
      await atualizaAssistencia(giraId);
    }
    setExpanded((prev) => ({ ...prev, [giraId]: !prev[giraId] }));
  };

  const atualizaAssistencia = async (giraId) => {
    const data = await fetchAssistencia(giraId, token);
    setAssistencias((prev) => ({ ...prev, [giraId]: data }));
  };

  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {giras.map((gira) => (
            <React.Fragment key={gira._id}>
              <tr>
                <td>{gira.name}</td>
                <td>{new Date(gira.date).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => toggleAssistencia(gira._id)}>
                    {expanded[gira._id] ? "Esconder" : "Ver assistência"}
                  </button>
                </td>
              </tr>
              {expanded[gira._id] && assistencias[gira._id] && (
                <tr>
                  <td colSpan="3">
                    <strong>Assistência:</strong>
                    <AssistenciaForm
                      giraId={gira._id}
                      onAdd={() => atualizaAssistencia(gira._id)}
                      token={token}
                    />

                    <AssistenciaTable assistencia={assistencias[gira._id]} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default GiraTable;
