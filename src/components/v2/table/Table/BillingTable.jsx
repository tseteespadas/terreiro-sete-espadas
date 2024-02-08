import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
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

const TableSearch = styled.div`
  position: relative;
  grid-area: search;
  place-self: end;

  input {
    min-width: 4rem;
    border: 1px solid ${(props) => props.theme.colors.gray3};
    border-radius: 12px;
    padding: 0.5rem 2rem;
    color: ${(props) => props.theme.colors.black};
    font-weight: 500;
    ::placeholder {
      color: ${(props) => props.theme.colors.black};
      opacity: 1; /* Firefox */
      font-weight: 400;
    }
    ::-ms-input-placeholder {
      /* Edge 12 -18 */
      color: ${(props) => props.theme.colors.black};
    }
  }

  .search-icon {
    position: absolute;
    width: 16px;
    height: 16px;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${(props) => props.theme.colors.black1};
  }
`;

const StyledGroupsTable = styled.table`
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

  th:first-child {
    min-width: 25rem;
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

const UserActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;

  button,
  a {
    background-color: transparent;
    display: flex;
    .icon {
      font-size: 1rem;
      color: ${(props) => props.theme.colors.blue};

      &.new {
        color: ${(props) => props.theme.colors.green};
      }

      &.danger {
        color: ${(props) => props.theme.colors.red};
      }
    }
  }
`;

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export default function BillingTable({
  loading,
  groups,
  handleNewGroup,
  handleEditGroup,
  handleDeleteGroup,
}) {
  const [nameSortAsc, setNameSortAsc] = useState(null);
  const [valueSortAsc, setValueSortAsc] = useState(null);
  const [groupSearch, setGroupSearch] = useState("");

  const handleSortByNameClick = useCallback(() => {
    setNameSortAsc((prev) => !prev);
    setValueSortAsc(null);
  }, []);

  const handleSortByValueClick = useCallback(() => {
    setValueSortAsc((prev) => !prev);
    setNameSortAsc(null);
  }, []);

  const handleGroupsSearchChange = useCallback(
    (e) => {
      const { value } = e.target;
      setGroupSearch(value);
    },
    [setGroupSearch]
  );

  const groupsData = groups
    .map(({ id, name, value }) => {
      const firstLetter = name.charAt(0);
      const firstLetterCap = firstLetter.toUpperCase();
      const remainingLetters = name.slice(1);
      const formattedName = firstLetterCap + remainingLetters;
      const formattedValue = currency.format(value);
      return {
        id,
        name,
        value,
        formattedName,
        formattedValue,
      };
    })
    .filter(({ name }) => {
      return name.toLowerCase().search(groupSearch.toLowerCase()) !== -1;
    })
    .sort((a, b) => {
      if (nameSortAsc !== null) {
        if (nameSortAsc) {
          return a.name.localeCompare(b.name);
        } else {
          return a.name.localeCompare(b.name) * -1;
        }
      }

      if (valueSortAsc !== null) {
        if (valueSortAsc) {
          return a.value - b.value;
        } else {
          return b.value - a.value;
        }
      }

      return 0;
    });

  return (
    <TableContainer>
      <TableNavigationContainer>
        <TableNavigation>
          <TableButton onClick={handleNewGroup}>
            <span>
              <FontAwesomeIcon className="icon" icon={["fas", "plus"]} />
              <FontAwesomeIcon className="icon" icon={["fas", "user-alt"]} />
            </span>
            Novo grupo de pagamento
          </TableButton>
        </TableNavigation>
        <TableSearch>
          <input
            type="text"
            id="table-search"
            name="table-search"
            placeholder="Procurar"
            value={groupSearch}
            onChange={handleGroupsSearchChange}
          />
          <FontAwesomeIcon className="search-icon" icon={["fas", "search"]} />
        </TableSearch>
      </TableNavigationContainer>
      <StyledGroupsTable>
        <caption>
          Tabela de Grupos de Pagamento. Contém colunas Nome, Valor e Opções.
        </caption>
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
            <th>
              <div className="sorting-header">
                Valor
                <div className="sort-container">
                  <button onClick={handleSortByValueClick}>
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
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={5}>
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
          {groupsData.map(({ id, formattedName, formattedValue }) => {
            return (
              <tr key={id}>
                <td className="highlight">{formattedName}</td>
                <td>{formattedValue}</td>
                <td>
                  <UserActions>
                    <button
                      onClick={() => handleEditGroup(id)}
                      title="Editar dados do grupo"
                    >
                      <FontAwesomeIcon
                        className="icon"
                        icon={["fas", "pencil-alt"]}
                      />
                    </button>
                    <Link
                      to={`/cobrancas/${id}`}
                      title="Visualizar pessoas vinculadas ao grupo"
                    >
                      <FontAwesomeIcon
                        className="icon new"
                        icon={["fas", "external-link-alt"]}
                      />
                    </Link>
                    <button
                      onClick={() => handleDeleteGroup(id)}
                      title="Remover grupo"
                    >
                      <FontAwesomeIcon
                        className="icon danger"
                        icon={["fas", "trash"]}
                      />
                    </button>
                  </UserActions>
                </td>
              </tr>
            );
          })}
        </tbody>
      </StyledGroupsTable>
    </TableContainer>
  );
}
