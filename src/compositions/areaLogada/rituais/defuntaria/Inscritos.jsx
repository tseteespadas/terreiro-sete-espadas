import React, { useCallback, useEffect, useState } from "react";

import InscritosRitualTable from "../../../../components/v2/table/Table/InscritosRitualTable";
import NewUserModal from "../../../../components/v2/modal/UserModals/NewUserModal";

import { useUser, useSetUser, useToken, useSetToken } from "../../../../store";

import {
  createRitualDefuntariaDama,
  fetchRituaisDefuntariaDama,
  fetchInscritosRitualDefuntariaDama,
} from "../../../../api/rituais";

async function fecthData(
  ritualId,
  setRituais,
  setError,
  setLoading,
  setToken,
  setUser,
  token
) {
  try {
    const response = await fetchInscritosRitualDefuntariaDama(
      ritualId,
      setToken,
      setUser,
      token
    );
    setRituais(response.data);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
}

export default function Rituais(props) {
  const { ritualId } = props;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inscritos, setInscritos] = useState([]);
  const [showNewSubscriberModal, setShowNewSubscriberModal] = useState(false);
  useState(false);

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
    if (user.role === "admin") {
      fecthData(
        ritualId,
        setInscritos,
        setError,
        setLoading,
        setToken,
        setUser,
        token
      );
    }
  }, [ritualId, user, token]);

  // controles de gerenciamento de dados
  const handleCreateSubscriber = useCallback(
    async (subscriber) => {
      fecthData(
        ritualId,
        setInscritos,
        setError,
        setLoading,
        setToken,
        setUser,
        token
      );
    },
    [ritualId, token]
  );

  const handleUpdatePayment = useCallback(async (id) => {}, [token]);

  const handleUpdateVisited = useCallback(async (id) => {}, [token]);

  const handleClickNewSubscriberButton = useCallback(() => {
    // setShowNewUserModal(true);
  }, []);

  const handleNewSubscriberClose = useCallback(() => {
    // setShowNewUserModal(false);
  }, []);

  return (
    <>
      {/* {showNewUserModal && (
        <NewUserModal
          userGroups={groups}
          paymentGroups={paymentGroups}
          handleAbort={handleNewUserModalClose}
          handleSave={handleCreateUser}
          handleClose={handleNewUserModalClose}
        />
      )} */}
      <InscritosRitualTable
        loading={loading}
        inscritos={inscritos}
        handleNewSubscriber={handleClickNewSubscriberButton}
        handleUpdatePayment={handleUpdatePayment}
        handleUpdateVisit={handleUpdateVisited}
      />
    </>
  );
}
