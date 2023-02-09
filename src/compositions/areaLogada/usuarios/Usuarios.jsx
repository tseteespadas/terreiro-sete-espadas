import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UsersTable from "../../../components/v2/table/Users/UsersTable";

const IconButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.7rem;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.darkblue1};
  border-radius: 1rem;

  span .icon {
    color: ${(props) => props.theme.colors.black1};
    font-size: 1rem;

    @media (min-width: 830px) {
      font-size: 1rem;
    }
  }

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.darkblue1};
    color: ${(props) => props.theme.colors.white1};
    span .icon {
      color: ${(props) => props.theme.colors.white1};
    }
  }
`;

import {
  useSetToken,
  useSetUser,
  useSetUsers,
  useToken,
  useUsers,
} from "../../../store";

import api from "../../../services/index";

async function updateUser(user, setError, setToken, setUser, token) {
  try {
    await api.put(`/user`, user, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    if (err.response) {
      setError(err.response.data.message);
      if (err.response.status === 401 || err.response.status === 419) {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        window.location.href = "/entrar";
      }
    } else {
      setError(
        "Algo inexperado aconteceu. Tente novamente mais tarde e se o erro persistir, entre em contato com um administrador."
      );
    }
  }
}

async function createUser(user, setError, setToken, setUser, token) {
  try {
    const { data } = await api.post(`/user/create`, user, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    if (err.response) {
      setError(err.response.data.message);
      if (err.response.status === 401 || err.response.status === 419) {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        window.location.href = "/entrar";
      }
    } else {
      setError(
        "Algo inexperado aconteceu. Tente novamente mais tarde e se o erro persistir, entre em contato com um administrador."
      );
    }
  }
}

async function deleteUser(userId, setError, setToken, setUser, token) {
  try {
    const { data } = await api.delete(`/user?user_id=${userId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    if (err.response) {
      setError(err.response.data.message);
      if (err.response.status === 401 || err.response.status === 419) {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        window.location.href = "/entrar";
      }
    } else {
      setError(
        "Algo inexperado aconteceu. Tente novamente mais tarde e se o erro persistir, entre em contato com um administrador."
      );
    }
  }
}

async function fetchUsers(setUsers, setError, setToken, setUser, token) {
  try {
    const { data } = await api.get(`/user/list`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setUsers(data);
  } catch (err) {
    if (err.response) {
      setError(err.response.data.message);
      if (err.response.status === 401 || err.response.status === 419) {
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        window.location.href = "/entrar";
      }
    } else {
      setError(
        "Algo inexperado aconteceu. Tente novamente mais tarde e se o erro persistir, entre em contato com um administrador."
      );
    }
  }
}

export default function Usuarios(props) {
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(true);
  const [showNewUserRow, setShowNewUserRow] = useState(false);

  const token = useToken();
  const setToken = useSetToken();
  const setUser = useSetUser();

  const users = useUsers();
  const setUsers = useSetUsers();

  useEffect(() => {
    fetchUsers(setUsers, setError, setToken, setUser, token);
  }, [token]);

  // controles de filtro
  const handleClickAddUser = useCallback(() => {
    setShowNewUserRow(true);
  }, []);

  const handleClickDiscardNewUser = useCallback(() => {
    setShowNewUserRow(false);
  }, []);

  // controles de gerenciamento de dados
  const handleUpdateUser = useCallback(
    async (user) => {
      await updateUser(user, setError, setToken, setUser, token);
      await fetchUsers(setUsers, setError, setToken, setUser, token);
    },
    [token]
  );

  const handleCreateUser = useCallback(
    async (user) => {
      await createUser(user, setError, setToken, setUser, token);
      await fetchUsers(setUsers, setError, setToken, setUser, token);
    },
    [token]
  );

  const handleDeleteUser = useCallback(
    async (userId) => {
      await deleteUser(userId, setError, setToken, setUser, token);
      await fetchUsers(setUsers, setError, setToken, setUser, token);
    },
    [token]
  );

  return (
    <>
      <IconButton onClick={handleClickAddUser}>
        Novo usuário
        <span>
          <FontAwesomeIcon className="icon" icon={["fas", "plus"]} />
          <FontAwesomeIcon className="icon" icon={["fas", "user-alt"]} />
        </span>
      </IconButton>
      <UsersTable
        users={users}
        handleRemove={handleDeleteUser}
        handleUpdate={handleUpdateUser}
        handleCreate={handleCreateUser}
        showNewUserRow={showNewUserRow}
        closeNewUserRow={handleClickDiscardNewUser}
      />
    </>
  );
}
