import React, { useCallback, useEffect, useState } from "react";

import BillingUsersTable from "../../../components/v2/table/Table/BillingUsersTable";
import AddUserToPaymentGroupModal from "../../../components/v2/modal/UsersPaymentGroupModals/AddUserToPaymentGroupModal";

import { useUser, useSetUser, useSetToken, useToken } from "../../../store";
import { fetchUsers } from "../../../api/users";
import { fetchPaymentGroupUsers } from "../../../api/paymentGroups";
import UsersCheckModal from "../../../components/v2/modal/UsersPaymentGroupModals/UsersCheckModal";

export default function GrupoCobrancaComposition(props) {
  const { group_id } = props;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [groupData, setGroupData] = useState(null);
  const [groupUsers, setGroupUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [showAddUserToGroupModal, setShowAddUserToGroupModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [showUsersCheckModal, setShowUsersCheckModal] = useState(false);
  const [usersCheckData, setUsersCheckData] = useState([]);

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
      const allUsersPromise = fetchUsers(setToken, setUser, token);
      const groupUsersPromise = fetchPaymentGroupUsers(
        group_id,
        setToken,
        setUser,
        token
      );
      const [allUsersResponse, groupUsersResponse] = await Promise.all([
        allUsersPromise,
        groupUsersPromise,
      ]);
      setLoading(false);
      if (allUsersResponse.error) {
        setError(allUsersResponse.errorMessage);
        return;
      }
      if (groupUsersResponse.error) {
        setError(groupUsersResponse.errorMessage);
        return;
      }

      setAllUsers(allUsersResponse.data);
      setGroupData(groupUsersResponse.data.group);
      setGroupUsers(groupUsersResponse.data.users);
    }
    fetchData();
  }, [group_id, token]);

  // controles de gerenciamento de eventos
  const handleClickAddUserToGroupButton = useCallback(() => {
    setShowAddUserToGroupModal(true);
    setUsersCheckData([]);
  }, []);

  const handleAddUserToGroupModalClose = useCallback(() => {
    setShowAddUserToGroupModal(false);
    setUsersCheckData([]);
  }, []);

  const handleUsersCheckModalClose = useCallback(() => {
    setShowUsersCheckModal(false);
    setUsersCheckData([]);
  }, []);

  const handleClickEditUserButton = useCallback(() => {
    setShowEditUserModal(true);
  }, []);

  const handleEditUserModalClose = useCallback(() => {
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

  const handlePrepareAddUsersToGroup = useCallback(
    (users) => {
      setUsersCheckData(users);
      setShowAddUserToGroupModal(false);
      setShowUsersCheckModal(true);
    },
    [group_id]
  );

  const handleAddUsersToGroup = useCallback(
    async (users) => {
      console.log(users);
      setUsersCheckData([]);
      return {
        error: false,
        errorMessage: "Deu tudo errado!",
        success: true,
        successMessage: "Deu tudo certo!",
      };
    },
    [group_id]
  );

  const handleEditUserBillingData = useCallback(
    async (user) => {
      return;
    },
    [group_id]
  );

  const handleToggleActive = useCallback(
    async ({ user_id, active }) => {
      return;
    },
    [group_id]
  );

  const nonGroupUsers = allUsers.filter((aUser) => {
    const found = groupUsers.find((gUser) => {
      return gUser.user_email !== aUser.email;
    });
    return !found;
  });

  const groupUsersData = groupUsers.map((groupUser) => {
    const isUser = allUsers.find(({ email }) => groupUser.user_email === email);
    return {
      ...groupUser,
      isUser,
    };
  });

  return (
    <>
      {showAddUserToGroupModal && (
        <AddUserToPaymentGroupModal
          users={nonGroupUsers}
          handleAbort={handleAddUserToGroupModalClose}
          handleClose={handleAddUserToGroupModalClose}
          handleSave={handlePrepareAddUsersToGroup}
        />
      )}
      {showUsersCheckModal && (
        <UsersCheckModal
          users={usersCheckData}
          handleAbort={handleUsersCheckModalClose}
          handleClose={handleUsersCheckModalClose}
          handleSave={handleAddUsersToGroup}
        />
      )}
      {showEditUserModal && (
        <EditUserBillingDataModal
          handleAbort={handleEditUserModalClose}
          handleClose={handleEditUserModalClose}
          handleSave={handleEditUserBillingData}
        />
      )}
      <BillingUsersTable
        loading={loading}
        groupData={groupData}
        groupUsers={groupUsersData}
        handleEdit={handleClickEditUserButton}
        handleToggleActive={handleToggleActive}
        handleAddUsersToGroup={handleClickAddUserToGroupButton}
        handleRemove={handleRemoveUserFromGroup}
      />
    </>
  );
}
