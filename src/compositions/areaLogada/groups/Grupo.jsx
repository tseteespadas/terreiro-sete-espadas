import React, { useCallback, useEffect, useState } from "react";

import GroupUsersTable from "../../../components/v2/table/Groups/GroupUsersTable";

import { useGroups, useSetToken, useSetUser, useToken } from "../../../store";

import api from "../../../services/index";
import UserSelect from "../../../components/v2/forms/UserSelect";

async function fetchGroupUsers(
  group_id,
  setUsers,
  setError,
  setToken,
  setUser,
  token
) {
  try {
    const { data } = await api.get(`/groups/users?group_id=${group_id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setUsers(data.users);
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

async function fetchAllUsers(setAllUsers, setError, setToken, setUser, token) {
  try {
    const { data } = await api.get(`/user/list`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setAllUsers(data);
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

async function patchUserOfGroup(payload, setError, setToken, setUser, token) {
  try {
    const { data } = await api.patch(`/groups`, payload, {
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

export default function GrupoComposition(props) {
  const { group_id } = props;
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(true);
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const token = useToken();
  const setToken = useSetToken();
  const setUser = useSetUser();
  const groups = useGroups();

  useEffect(() => {
    if (group_id) {
      fetchGroupUsers(group_id, setUsers, setError, setToken, setUser, token);
      fetchAllUsers(setAllUsers, setError, setToken, setUser, token);
    }
  }, [group_id, token]);

  const handleSelectUser = useCallback(
    async (e) => {
      const user_id = e.target.value;
      await patchUserOfGroup({
        user_id,
        group_id,
      }, setError, setToken, setUser, token);
      
      fetchGroupUsers(group_id, setUsers, setError, setToken, setUser, token);
    },
    [group_id, token]
  );

  const handleRemoveUser = useCallback(
    async (payload) => {
      await patchUserOfGroup(payload, setError, setToken, setUser, token);
      
      fetchGroupUsers(group_id, setUsers, setError, setToken, setUser, token);
    },
    [group_id]
  );

  const group = groups.find(({ group_id: id }) => id === group_id);
  const usersOutside = allUsers.filter(({ user_id }) => {
    return !users.find(({ user_id: id }) => user_id === id);
  });
  return (
    <>
      <h1>Grupo - {group.group_name}</h1>

      <UserSelect
        handleSelect={handleSelectUser}
        label="Adicionar usuários ao grupo:"
        id="user-select"
        users={usersOutside}
      />
      <GroupUsersTable group={group} users={users} handleRemove={handleRemoveUser} />
    </>
  );
}
