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

  tr.non-user {
    background-color: ${(props) => props.theme.colors.blue};
    color: white;
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

  .slider-checkbox {
    /* The switch - the box around the slider */
    .switch {
      position: relative;
      display: inline-block;
      width: 48px;
      height: 26px;
    }

    /* Hide default HTML checkbox */
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* The slider */
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${(props) => props.theme.colors.red};
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: ${(props) => props.theme.colors.green};
    }

    input:focus + .slider {
      box-shadow: 0 0 1px ${(props) => props.theme.colors.green};
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(22px);
      -ms-transform: translateX(22px);
      transform: translateX(22px);
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 22px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
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

      &.alt {
        color: ${(props) => props.theme.colors.white};
      }
    }
  }
`;

export default function BillingUsersTable({
  loading,
  groupData,
  groupUsers,
  handleAddUsersToGroup,
  handleToggleActive,
  handleRemove,
  handleEdit,
}) {
  const [nameSortAsc, setNameSortAsc] = useState(null);
  const [nameSearch, setNameSearch] = useState("");

  const handleSortByNameClick = useCallback(() => {
    setNameSortAsc(!nameSortAsc);
  }, [nameSortAsc, setNameSortAsc]);

  const handleToggle = useCallback(
    async (e) => {
      const { checked, id } = e.target;
      console.log(checked);
      // await handleToggleActive(id, checked);
    },
    [nameSortAsc, setNameSortAsc]
  );

  const handleNameSearchChange = useCallback((e) => {
    const { value } = e.target;
    setNameSearch(value);
  });

  const usersData = groupUsers
    .filter(({ user_name }) => {
      return user_name.toLowerCase().search(nameSearch.toLowerCase()) !== -1;
    })
    .sort((a, b) => {
      if (nameSortAsc !== null) {
        if (nameSortAsc) {
          return a.user_name.localeCompare(b.user_name);
        } else {
          return a.user_name.localeCompare(b.user_name) * -1;
        }
      }

      return 0;
    });

  return (
    <TableContainer>
      <TableNavigationContainer>
        <TableNavigation>
          <TableButton onClick={handleAddUsersToGroup}>
            <span>
              <FontAwesomeIcon className="icon" icon={["fas", "plus"]} />
              <FontAwesomeIcon className="icon" icon={["fas", "user-alt"]} />
            </span>
            Vincular usuário ao grupo de pagamento
          </TableButton>
        </TableNavigation>
        <TableSearch>
          <input
            type="text"
            id="table-search"
            name="table-search"
            placeholder="Procurar"
            value={nameSearch}
            onChange={handleNameSearchChange}
          />
          <FontAwesomeIcon className="search-icon" icon={["fas", "search"]} />
        </TableSearch>
      </TableNavigationContainer>
      <StyledGroupsTable>
        <caption>
          Tabela de Usuários do Grupo de Pagamento{" "}
          {(groupData && groupData.name) || "Em carregamento"}. Contém colunas
          Avatar, Nome, Email, Email de Pagamento (Asaas), Ativo e Opções.
        </caption>
        <thead>
          <tr>
            <th colSpan={5}>
              <div className="loader">
                {!!groupData && <h2>Grupo - {groupData.name}</h2>}
              </div>
            </th>
          </tr>
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
            <th>Email de Pagamento (Asaas)</th>
            <th>Ativo</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {(loading || !groupData) && (
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
          {!!groupData &&
            !loading &&
            usersData.map((user) => {
              return (
                <tr
                  key={user.user_id}
                  className={!user.isUser ? "non-user" : ""}
                >
                  <td className="highlight">{user.user_name}</td>
                  <td>{user.user_email}</td>
                  <td>{user.user_billing_email}</td>
                  <td>
                    <div className="slider-checkbox">
                      <label className="switch">
                        <input
                          type="checkbox"
                          onChange={handleToggle}
                          id={`switch-active-${user.id}`}
                          defaultChecked={user.active}
                          disabled={loading}
                        />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </td>
                  <td>
                    <UserActions>
                      <button
                        onClick={() => handleEdit(user.user_id)}
                        title="Alterar informações de pagamento"
                      >
                        <FontAwesomeIcon
                          className={`icon ${!user.isUser ? "alt" : ""}`}
                          icon={["fas", "pencil-alt"]}
                        />
                      </button>
                      <button
                        onClick={() => handleRemove(user.user_id)}
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
