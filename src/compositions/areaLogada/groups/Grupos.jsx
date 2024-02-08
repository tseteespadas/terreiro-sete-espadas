import React, { useCallback, useEffect, useState } from "react";

import GroupsTable from "../../../components/v2/table/Table/GroupsTable";

import {
  useUser,
  useSetUser,
  useToken,
  useSetToken,
  useGroups,
  useSetGroups,
} from "../../../store";

import {
  fetchGroups,
  createGroup,
  updateGroup,
  deleteGroup,
} from "../../../api/userGroups";
import NewGroupModal from "../../../components/v2/modal/GroupModals/NewGroupModal";
import EditGroupModal from "../../../components/v2/modal/GroupModals/EditGroupModal";

export default function GruposComposition(props) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showNewGroupModal, setShowNewGroupModal] = useState(false);
  const [showEditGroupModal, setShowEditGroupModal] = useState(false);
  const [groupEditData, setGroupEditData] = useState(null);

  const user = useUser();
  const setUser = useSetUser();
  const token = useToken();
  const setToken = useSetToken();
  const groups = useGroups();
  const setGroups = useSetGroups();

  if (user.role !== "admin") {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    window.location.href = "/entrar";
  }

  useEffect(() => {
    async function fetchData() {
      if (user.role === "admin") {
        setLoading(true);
        const response = await fetchGroups(setToken, setUser, token);
        setLoading(false);
        if (response.error) {
          setError(response.errorMessage);
          return;
        }
        setGroups(response.data);
      }
    }
    fetchData();
  }, [user, token]);

  // controles de gerenciamento de eventos
  const handleClickNewGroupButton = useCallback(() => {
    setShowNewGroupModal(true);
  }, []);

  const handleNewGroupModalClose = useCallback(() => {
    setShowNewGroupModal(false);
  }, []);

  const handleClickEditGroupButton = useCallback((groupData) => {
    setShowEditGroupModal(true);
    setGroupEditData(groupData);
  }, []);

  const handleEditGroupModalClose = useCallback(() => {
    setShowEditGroupModal(false);
    setGroupEditData(null);
  }, []);

  // controles de gerenciamento de dados
  const handleCreateGroup = useCallback(async (group_name) => {
    const response = await createGroup(group_name, setToken, setUser, token);
    const groups = await fetchGroups(setToken, setUser, token);
    setGroups(groups.data);
    return response;
  }, []);

  const handleUpdateGroup = useCallback(async (groupData) => {
    const response = await updateGroup(groupData, setToken, setUser, token);
    const groups = await fetchGroups(setToken, setUser, token);
    setGroups(groups.data);
    return response;
  }, []);

  const handleDeleteGroup = useCallback(async (group_id) => {
    if (window.confirm("Tem certeza de que deseja remover esse grupo?")) {
      const response = await deleteGroup(group_id, setToken, setUser, token);
      const groups = await fetchGroups(setToken, setUser, token);
      setGroups(groups.data);
      if (response.error) {
        setError(response.errorMessage);
      }
    }
  }, []);

  return (
    <>
      {showNewGroupModal && (
        <NewGroupModal
          handleAbort={handleNewGroupModalClose}
          handleSave={handleCreateGroup}
          handleClose={handleNewGroupModalClose}
        />
      )}
      {showEditGroupModal && (
        <EditGroupModal
          {...groupEditData}
          handleAbort={handleEditGroupModalClose}
          handleSave={handleUpdateGroup}
          handleClose={handleEditGroupModalClose}
        />
      )}
      <GroupsTable
        groups={groups}
        loading={loading}
        handleNewGroup={handleClickNewGroupButton}
        handleEditGroup={handleClickEditGroupButton}
        handleDeleteGroup={handleDeleteGroup}
      />
    </>
  );
}
