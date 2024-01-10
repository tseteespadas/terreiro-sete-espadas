import React, { useCallback, useEffect, useState } from "react";

import UsersTable from "../../../components/v2/table/Table/UsersTable";

import {
  useUser,
  useSetUser,
  useToken,
  useSetToken,
  useUsers,
  useSetUsers,
  useGroups,
  useSetGroups,
  usePaymentGroups,
  useSetPaymentGroups,
} from "../../../store";

import NewUserModal from "../../../components/v2/modal/NewUserModal";
import EditUserModal from "../../../components/v2/modal/EditUserModal";
import EditUserGroupsModal from "../../../components/v2/modal/EditUserGroupsModal";
import EditUserPaymentGroupModal from "../../../components/v2/modal/EditUserPaymentGroupModal";

import { fetchData } from "../../../api";
import { createUser, updateUser, deleteUser } from "../../../api/users";
import { updateUserGroups } from "../../../api/userGroups";
import { updateUserPaymentGroup } from "../../../api/paymentGroups";

export default function Usuarios(props) {
  const [error, setError] = useState(null);
  const [showNewUserModal, setShowNewUserModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [userEditData, setUserEditData] = useState(null);
  const [showEditUserGroupsModal, setShowEditUserGroupsModal] = useState(false);
  const [editUserGroupsData, setEditUserGroupsData] = useState(null);
  const [showEditUserPaymentGroupModal, setShowEditUserPaymentGroupModal] =
    useState(false);
  const [editUserPaymentGroupData, setEditUserPaymentGroupData] =
    useState(null);

  const user = useUser();
  const setUser = useSetUser();

  const token = useToken();
  const setToken = useSetToken();

  const users = useUsers();
  const setUsers = useSetUsers();

  const groups = useGroups();
  const setGroups = useSetGroups();

  const paymentGroups = usePaymentGroups();
  const setPaymentGroups = useSetPaymentGroups();

  if (user.role !== "admin") {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    window.location.href = "/entrar";
  }

  useEffect(() => {
    if (user.role === "admin") {
      fetchData(
        {
          setError,
          setToken,
          setUser,
          setUsers,
          setGroups,
          setPaymentGroups,
        },
        token
      );
    }
  }, [token]);

  // controles de gerenciamento de dados
  const handleUpdateUser = useCallback(
    async (user) => {
      const response = await updateUser(user, setToken, setUser, token);
      await fetchData(
        {
          setError,
          setToken,
          setUser,
          setUsers,
          setGroups,
          setPaymentGroups,
        },
        token
      );

      return response;
    },
    [token]
  );

  const handleCreateUser = useCallback(
    async (user) => {
      const response = await createUser(user, setToken, setUser, token);
      await fetchData(
        {
          setError,
          setToken,
          setUser,
          setUsers,
          setGroups,
          setPaymentGroups,
        },
        token
      );

      return response;
    },
    [token]
  );

  const handleUpdateUserGroups = useCallback(
    async (userGroups) => {
      const response = await updateUserGroups(
        userGroups,
        setToken,
        setUser,
        token
      );
      await fetchData(
        {
          setError,
          setToken,
          setUser,
          setUsers,
          setGroups,
          setPaymentGroups,
        },
        token
      );

      return response;
    },
    [token]
  );

  const handleUpdateUserPaymentGroup = useCallback(
    async (userData) => {
      const response = await updateUserPaymentGroup(
        userData,
        setToken,
        setUser,
        token
      );
      await fetchData(
        {
          setError,
          setToken,
          setUser,
          setUsers,
          setGroups,
          setPaymentGroups,
        },
        token
      );

      return response;
    },
    [token]
  );

  const handleClickDeleteUserButton = useCallback(
    async (userId) => {
      if (window.confirm("Tem certeza de que deseja remover esse usuário?")) {
        const response = await deleteUser(
          userId,
          setError,
          setToken,
          setUser,
          token
        );

        await fetchData(
          {
            setError,
            setToken,
            setUser,
            setUsers,
            setGroups,
            setPaymentGroups,
          },
          token
        );

        if (response.error) {
          setError(response.errorMessage);
        }
      }
    },
    [token]
  );

  const handleClickNewUserButton = useCallback(() => {
    setShowNewUserModal(true);
  }, []);

  const handleNewUserModalClose = useCallback(() => {
    setShowNewUserModal(false);
  }, []);

  const handleClickEditUserButton = useCallback((userData) => {
    setShowEditUserModal(true);
    setUserEditData(userData);
  }, []);

  const handleEditUserModalClose = useCallback(() => {
    setShowEditUserModal(false);
    setUserEditData(null);
  }, []);

  const handleClickEditUserGroupsButton = useCallback((userGroupsData) => {
    setShowEditUserGroupsModal(true);
    setEditUserGroupsData(userGroupsData);
  }, []);

  const handleEditUserGroupsModalClose = useCallback(() => {
    setShowEditUserGroupsModal(false);
    setEditUserGroupsData(null);
  }, []);

  const handleClickEditUserPaymentGroupButton = useCallback(
    (userPaymentGroupData) => {
      setShowEditUserPaymentGroupModal(true);
      setEditUserPaymentGroupData(userPaymentGroupData);
    },
    []
  );

  const handleEditUserPaymentGroupModalClose = useCallback(() => {
    setShowEditUserPaymentGroupModal(false);
    setEditUserPaymentGroupData(null);
  }, []);

  return (
    <>
      {showNewUserModal && (
        <NewUserModal
          userGroups={groups}
          paymentGroups={paymentGroups}
          handleAbort={handleNewUserModalClose}
          handleSave={handleCreateUser}
          handleClose={handleNewUserModalClose}
        />
      )}
      {showEditUserModal && !!userEditData && (
        <EditUserModal
          {...userEditData}
          handleAbort={handleEditUserModalClose}
          handleSave={handleUpdateUser}
          handleClose={handleEditUserModalClose}
        />
      )}
      {showEditUserGroupsModal && !!editUserGroupsData && (
        <EditUserGroupsModal
          {...editUserGroupsData}
          allGroups={groups}
          handleAbort={handleEditUserGroupsModalClose}
          handleSave={handleUpdateUserGroups}
          handleClose={handleEditUserGroupsModalClose}
        />
      )}
      {showEditUserPaymentGroupModal && !!editUserPaymentGroupData && (
        <EditUserPaymentGroupModal
          {...editUserPaymentGroupData}
          paymentGroups={paymentGroups}
          handleAbort={handleEditUserPaymentGroupModalClose}
          handleSave={handleUpdateUserPaymentGroup}
          handleClose={handleEditUserPaymentGroupModalClose}
        />
      )}
      <UsersTable
        users={users}
        handleNewUser={handleClickNewUserButton}
        handleEditUser={handleClickEditUserButton}
        handleEditGroups={handleClickEditUserGroupsButton}
        handleEditPayment={handleClickEditUserPaymentGroupButton}
        handleDeleteUser={handleClickDeleteUserButton}
      />
    </>
  );
}
