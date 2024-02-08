import React, { useCallback, useEffect, useState } from "react";

import BillingTable from "../../../components/v2/table/Table/BillingTable";
import EditPaymentGroupModal from "../../../components/v2/modal/PaymentGroupModals/EditPaymentGroupModal";
import NewPaymentGroupModal from "../../../components/v2/modal/PaymentGroupModals/NewPaymentGroupModal";

import { useUser, useSetUser, useToken, useSetToken } from "../../../store";

import {
  fetchPaymentGroups,
  createPaymentGroup,
  updatePaymentGroup,
  deletePaymentGroup,
} from "../../../api/paymentGroups";

export default function CobrancasComposition(props) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paymentGroups, setPaymentGroups] = useState([]);
  const [showNewPaymentGroupModal, setShowNewPaymentGroupModal] =
    useState(false);
  const [showEditPaymentGroupModal, setShowEditPaymentGroupModal] =
    useState(false);
  const [currentEditingPaymentGroupId, setCurrentEditingPaymentGroupId] =
    useState(null);

  const user = useUser();
  const setUser = useSetUser();
  const token = useToken();
  const setToken = useSetToken();

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
        const response = await fetchPaymentGroups(setToken, setUser, token);
        setLoading(false);
        if (response.error) {
          setError(response.errorMessage);
          return;
        }
        setPaymentGroups(response.data);
      }
    }
    fetchData();
  }, [user, token]);

  // controles de gerenciamento de eventos
  const handleClickNewGroupButton = useCallback(() => {
    setShowNewPaymentGroupModal(true);
  }, []);

  const handleNewGroupModalClose = useCallback(() => {
    setShowNewPaymentGroupModal(false);
  }, []);

  const handleClickEditGroupButton = useCallback((id) => {
    setCurrentEditingPaymentGroupId(id);
    setShowEditPaymentGroupModal(true);
  }, []);

  const handleEditGroupModalClose = useCallback(() => {
    setShowEditPaymentGroupModal(false);
    setCurrentEditingPaymentGroupId(null);
  }, []);

  // controles de gerenciamento de dados
  const handleCreateGroup = useCallback(
    async ({ name, value }) => {
      setLoading(true);
      const createPaymentGroupResponse = await createPaymentGroup(
        { name, value },
        setToken,
        setUser,
        token
      );
      const paymentGroupsResponse = await fetchPaymentGroups(
        setToken,
        setUser,
        token
      );
      setLoading(false);
      if (paymentGroupsResponse.error) {
        setError(paymentGroupsResponse.errorMessage);
        return;
      }
      setPaymentGroups(paymentGroupsResponse.data);
      return createPaymentGroupResponse;
    },
    [token]
  );

  const handleUpdateGroup = useCallback(
    async ({ id, name, value }) => {
      setLoading(true);
      const updatePaymentGroupResponse = await updatePaymentGroup(
        { id, name, value },
        setToken,
        setUser,
        token
      );
      const paymentGroupsResponse = await fetchPaymentGroups(
        setToken,
        setUser,
        token
      );
      setLoading(false);
      if (paymentGroupsResponse.error) {
        setError(paymentGroupsResponse.errorMessage);
        return;
      }
      setPaymentGroups(paymentGroupsResponse.data);
      return updatePaymentGroupResponse;
    },
    [token]
  );

  const handleDeleteGroup = useCallback(
    async (id) => {
      if (
        window.confirm(
          "Tem certeza de que deseja remover esse grupo de pagamento?"
        )
      ) {
        setLoading(true);
        const response = await deletePaymentGroup(id, setToken, setUser, token);

        if (response.error) {
          setError(response.errorMessage);
        }
        const paymentGroupsResponse = await fetchPaymentGroups(
          setToken,
          setUser,
          token
        );
        setLoading(false);
        if (paymentGroupsResponse.error) {
          setError(paymentGroupsResponse.errorMessage);
          return;
        }
        setPaymentGroups(paymentGroupsResponse.data);
      }
    },
    [token]
  );

  return (
    <>
      {showNewPaymentGroupModal && (
        <NewPaymentGroupModal
          handleAbort={handleNewGroupModalClose}
          handleSave={handleCreateGroup}
          handleClose={handleNewGroupModalClose}
        />
      )}
      {showEditPaymentGroupModal && (
        <EditPaymentGroupModal
          {...paymentGroups.find(
            ({ id }) => currentEditingPaymentGroupId === id
          )}
          handleAbort={handleEditGroupModalClose}
          handleSave={handleUpdateGroup}
          handleClose={handleEditGroupModalClose}
        />
      )}
      <BillingTable
        groups={paymentGroups}
        loading={loading}
        handleNewGroup={handleClickNewGroupButton}
        handleEditGroup={handleClickEditGroupButton}
        handleDeleteGroup={handleDeleteGroup}
      />
    </>
  );
}
