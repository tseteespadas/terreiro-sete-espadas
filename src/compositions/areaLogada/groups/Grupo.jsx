import React, { useCallback, useEffect, useState } from "react";

import GroupUsersTable from "../../../components/v2/table/Table/GroupUsersTable";

import { useUser, useSetUser, useSetToken, useToken } from "../../../store";

import { fetchGroupData, patchUserOfGroup } from "../../../api/userGroups";
import { fetchUsers } from "../../../api/users";
import AddUserToGroupModal from "../../../components/v2/modal/UsersGroupModals/AddUserToGroupModal";

export default function GrupoComposition(props) {
  const { group_id } = props;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [groupData, setGroupData] = useState(null);
  const [groupUsers, setGroupUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [showAddUserToGroupModal, setShowAddUserToGroupModal] = useState(false);

  const token = useToken();
  const setToken = useSetToken();
  const user = useUser();
  const setUser = useSetUser();

  if (user.role !== "admin") {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    window.location.href = "/entrar";
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const groupDataPromise = fetchGroupData(
        group_id,
        setToken,
        setUser,
        token
      );
      const allUsersPromise = fetchUsers(setToken, setUser, token);
      const [groupDataResponse, allUsersResponse] = await Promise.all([
        groupDataPromise,
        allUsersPromise,
      ]);
      setLoading(false);
      if (groupDataResponse.error) {
        setError(groupDataResponse.errorMessage);
        return;
      }
      if (allUsersResponse.error) {
        setError(allUsersResponse.errorMessage);
      }
      setGroupData(groupDataResponse.data.group);
      setGroupUsers(groupDataResponse.data.users);
      if (groupDataResponse.data.users.length === 0) {
        setShowAddUserToGroupModal(true);
      }
      setAllUsers(allUsersResponse.data);
    }
    fetchData();
  }, [group_id, token]);

  // controles de gerenciamento de eventos
  const handleClickAddUserToGroupButton = useCallback(() => {
    setShowAddUserToGroupModal(true);
  }, []);

  const handleAddUserToGroupModalClose = useCallback(() => {
    setShowAddUserToGroupModal(false);
  }, []);

  // controles de gerenciamento de dados
  const handleRemoveUserFromGroup = useCallback(
    async (user_id) => {
      if (
        window.confirm(
          "Tem certeza de que deseja remover esse usuário do grupo?"
        )
      ) {
        await patchUserOfGroup({ user_id, group_id }, setToken, setUser, token);
        const groupDataResponse = await fetchGroupData(
          group_id,
          setToken,
          setUser,
          token
        );
        setGroupData(groupDataResponse.data.group);
        setGroupUsers(groupDataResponse.data.users);
        if (groupDataResponse.error) {
          setError(groupDataResponse.errorMessage);
        }
      }
    },
    [group_id]
  );

  const handleAddUsersToGroup = useCallback(
    async (users) => {
      const response = await patchUserOfGroup(
        { users, group_id },
        setToken,
        setUser,
        token
      );
      const groupDataResponse = await fetchGroupData(
        group_id,
        setToken,
        setUser,
        token
      );
      setGroupData(groupDataResponse.data.group);
      setGroupUsers(groupDataResponse.data.users);
      return response;
    },
    [group_id]
  );

  const nonGroupUsers = allUsers.filter((aUser) => {
    const found = groupUsers.find((gUser) => {
      return gUser.user_id === aUser.user_id;
    });
    return !found;
  });

  return (
    <>
      {showAddUserToGroupModal && (
        <AddUserToGroupModal
          users={nonGroupUsers}
          handleAbort={handleAddUserToGroupModalClose}
          handleClose={handleAddUserToGroupModalClose}
          handleSave={handleAddUsersToGroup}
        />
      )}
      <GroupUsersTable
        loading={loading}
        groupData={groupData}
        groupUsers={groupUsers}
        handleAddUsersToGroup={handleClickAddUserToGroupButton}
        handleRemove={handleRemoveUserFromGroup}
      />
    </>
  );
}
