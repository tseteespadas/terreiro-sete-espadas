import React from "react";
import styled from "styled-components";
import { TableButton } from "./TableButton";

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
`;

const AssistenciaTable = ({
  isAdmin,
  giraId,
  assistencia,
  handleToggleCalled,
  handleDeleteAssistencia,
}) => {
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
            <th>Chamada</th>
            {isAdmin && <th>Ações</th>}
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
                <td>
                  <TableButton
                    onClick={() => handleToggleCalled(giraId, pessoa._id)}
                  >
                    {pessoa.called ? "✅ Sim" : "❌ Não"}
                  </TableButton>
                </td>
                {isAdmin && (
                  <td>
                    <TableButton
                      onClick={() =>
                        window.confirm("Tem certeza que deseja excluir?")
                          ? handleDeleteAssistencia(giraId, pessoa._id)
                          : null
                      }
                    >
                      🗑️ Excluir
                    </TableButton>
                  </td>
                )}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default AssistenciaTable;
