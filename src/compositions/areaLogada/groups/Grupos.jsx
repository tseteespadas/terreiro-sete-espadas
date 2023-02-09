import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GroupsTable from "../../../components/v2/table/Groups/GroupsTable";

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
  useGroups,
  useSetGroups,
  useSetToken,
  useSetUser,
  useToken,
} from "../../../store";

import api from "../../../services/index";

async function updateGroup(group, setError, setToken, setUser, token) {
  try {
    await api.put(`/groups`, group, {
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

async function createGroup(group, setError, setToken, setUser, token) {
  try {
    const { data } = await api.post(`/groups`, group, {
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

async function deleteGroup(groupId, setError, setToken, setUser, token) {
  try {
    const { data } = await api.delete(`/groups/${groupId}`, {
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

async function fetchGroups(setGroups, setError, setToken, setUser, token) {
  try {
    const { data } = await api.get(`/groups`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setGroups(data.groups);
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

export default function GruposComposition(props) {
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(true);
  const [showNewGroupRow, setShowNewGroupRow] = useState(false);

  const token = useToken();
  const setToken = useSetToken();
  const setUser = useSetUser();

  const groups = useGroups();
  const setGroups = useSetGroups();

  useEffect(() => {
    fetchGroups(setGroups, setError, setToken, setUser, token);
  }, [token]);

  // controles de filtro
  const handleClickAddGroup = useCallback(() => {
    setShowNewGroupRow(true);
  }, []);

  const handleClickDiscardNewGroup = useCallback(() => {
    setShowNewGroupRow(false);
  }, []);

  // controles de gerenciamento de dados
  const handleUpdateGroup = useCallback(
    async (group) => {
      await updateGroup(group, setError, setToken, setUser, token);
      await fetchGroups(setGroups, setError, setToken, setUser, token);
    },
    [token]
  );

  const handleCreateGroup = useCallback(
    async (group) => {
      await createGroup(group, setError, setToken, setUser, token);
      await fetchGroups(setGroups, setError, setToken, setUser, token);
    },
    [token]
  );

  const handleDeleteGroup = useCallback(
    async (groupId) => {
      await deleteGroup(groupId, setError, setToken, setUser, token);
      await fetchGroups(setGroups, setError, setToken, setUser, token);
    },
    [token]
  );

  return (
    <>
      <IconButton onClick={handleClickAddGroup}>
        Novo grupo
        <span>
          <FontAwesomeIcon className="icon" icon={["fas", "plus"]} />
          <FontAwesomeIcon className="icon" icon={["fas", "users"]} />
        </span>
      </IconButton>
      <GroupsTable
        groups={groups}
        handleRemove={handleDeleteGroup}
        handleUpdate={handleUpdateGroup}
        handleCreate={handleCreateGroup}
        showNewGroupRow={showNewGroupRow}
        closeNewGroupRow={handleClickDiscardNewGroup}
      />
    </>
  );
}
