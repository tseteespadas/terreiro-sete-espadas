import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useCallback } from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  width: fit-content;
  position: relative;
`;

const TableNavigationContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: "nav empty search";
  width: 100%;
  margin-bottom: 1rem;
`;

const TableNavigation = styled.nav`
  place-self: start;
  grid-area: nav;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TableButton = styled.button`
  height: 100%;
  border-radius: 12px;
  padding: 0.5rem 2rem 0.5rem 4rem;
  background-color: ${(props) => props.theme.colors.blue};
  color: white;
  position: relative;

  &:hover {
    background-color: ${(props) => props.theme.colors.green};
  }
  span {
    position: absolute;
    left: 1rem;
    padding-right: 0.5rem;
    border-right: 1px solid #fff;
  }
`;

const StyledSubscribersTable = styled.table`
  margin-bottom: 2rem;
  /* Change these properties */
  --border: 1px solid #9ba7ac;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  /* Don't change these properties */
  border-spacing: 0;
  border-collapse: separate;
  border: var(--border);
  overflow: hidden;

  /* Apply a border to the right of all but the last column */
  th:not(:last-child),
  td:not(:last-child) {
    border-right: var(--border);
  }

  /* Apply a border to the bottom of all but the last row */
  thead > tr:not(:last-child) > th,
  thead > tr:not(:last-child) > td,
  tbody > tr:not(:last-child) > th,
  tbody > tr:not(:last-child) > td,
  tfoot > tr:not(:last-child) > th,
  tfoot > tr:not(:last-child) > td,
  tr:not(:last-child) > td,
  tr:not(:last-child) > th,
  thead:not(:last-child),
  tbody:not(:last-child),
  tfoot:not(:last-child) {
    border-bottom: var(--border);
  }

  tr {
    box-shadow: 0 1px 0px rgba(0, 0, 0, 0.3);
  }

  th {
    border: 0;
    background-color: ${(props) => props.theme.colors.lightblue1};
    color: white;
    margin: 0;
  }

  th,
  td {
    padding: 0.75em 2em;
  }

  th .sorting-header {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  caption {
    display: none;
  }

  /**
   * body
   */

  td.confirmed,
  td.not-confirmed {
    text-align: center;
  }

  td span {
    border-radius: 16px;
    padding: 0.2em 0.5em;
    font-weight: 600;
    font-size: 14px;
  }

  td.confirmed span {
    background-color: ${(props) => props.theme.colors.green};
    color: #04380d;
  }

  td.not-confirmed span {
    background-color: ${(props) => props.theme.colors.red};
    color: #430202;
  }

  td.highlight {
    font-weight: bold;
  }

  .sort-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: normal;
  }

  .sort-container button {
    padding: 0.15em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    outline: none;
    position: relative;
  }

  .sort-container button .sort-icon {
    height: 12px;
    width: 12px;
    position: absolute;
    color: ${(props) => props.theme.colors.blue};
  }

  .sort-container button .sort-icon:first-child {
    top: -4px;
  }

  .sort-container button .sort-icon:not(:first-child) {
    bottom: -4px;
  }

  .user-avatar {
    display: grid;
    place-content: center;
    position: relative;
  }

  .user-avatar-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .user-avatar .icon {
    position: absolute;
    top: 18px;
    left: 36px;
  }

  .loader {
    width: 100%;
    display: grid;
    place-content: center;
  }
`;

export default function InscritosRitualTable({
  loading,
  inscritos,
  handleNewSubscriber,
  handleUpdatePayment,
  handleUpdateVisit,
}) {
  const [nameSortAsc, setNameSortAsc] = useState(null);

  const handleSortByNameClick = useCallback(() => {
    setNameSortAsc(!nameSortAsc);
  }, [nameSortAsc, setNameSortAsc]);

  const inscritosData = inscritos
    .map(({ _id, name, email, phone, gender, pronoums, paid, visited }) => {
      return {
        _id,
        name,
        email,
        phone,
        gender,
        pronoums,
        veio: visited ? "Sim" : "Não",
        pagou: paid ? "Sim" : "Não",
        visited,
        paid,
      };
    })
    .sort((a, b) => {
      if (nameSortAsc !== null) {
        if (nameSortAsc) {
          return a.name.localeCompare(b.name);
        } else {
          return a.name.localeCompare(b.name) * -1;
        }
      }

      return 0;
    });

  return (
    <TableContainer>
      <TableNavigationContainer>
        <TableNavigation>
          <TableButton onClick={handleNewSubscriber}>
            <span>
              <FontAwesomeIcon className="icon" icon={["fas", "plus"]} />
              <FontAwesomeIcon className="icon" icon={["fas", "user-alt"]} />
            </span>
            Adicionar nova inscrição
          </TableButton>
        </TableNavigation>
      </TableNavigationContainer>
      <StyledSubscribersTable>
        <caption>Tabela de inscritos.</caption>
        <thead>
          <tr>
            <th>
              <div className="sorting-header">
                Nome
                <div className="sort-container">
                  <button onClick={handleSortByNameClick}>
                    <FontAwesomeIcon
                      className="sort-icon"
                      icon={["fas", "sort-up"]}
                    />
                    <FontAwesomeIcon
                      className="sort-icon"
                      icon={["fas", "sort-down"]}
                    />
                  </button>
                </div>
              </div>
            </th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Gênero</th>
            <th>Pronomes</th>
            <th>Pagou</th>
            <th>Compareceu</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={7}>
                <div className="loader">
                  <FontAwesomeIcon
                    className="icon-loading"
                    spin={true}
                    spinPulse={true}
                    icon={["fas", "spinner"]}
                  />
                </div>
              </td>
            </tr>
          )}
          {inscritosData.map((subscriber) => {
            return (
              <tr key={subscriber._id}>
                <td className="highlight">{subscriber.name}</td>
                <td>{subscriber.email}</td>
                <td>{subscriber.phone}</td>
                <td>{subscriber.gender}</td>
                <td>{subscriber.pronoums}</td>
                <td className={subscriber.paid ? "confirmed" : "not-confirmed"}>
                  <button
                    onClick={() => handleUpdatePayment(subscriber._id)}
                    title="Atualizar pagamento"
                  >
                    <span>{subscriber.pagou}</span>
                  </button>
                </td>
                <td
                  className={subscriber.visited ? "confirmed" : "not-confirmed"}
                >
                  <button
                    onClick={() => handleUpdateVisit(subscriber._id)}
                    title="Atualizar presença"
                  >
                    <span>{subscriber.veio}</span>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </StyledSubscribersTable>
    </TableContainer>
  );
}
