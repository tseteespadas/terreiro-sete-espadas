import React, { useCallback, useEffect, useState } from "react";

import RituaisTable from "../../../../components/v2/table/Table/RituaisTable";
import NewUserModal from "../../../../components/v2/modal/UserModals/NewUserModal";

import { useUser, useSetUser, useToken, useSetToken } from "../../../../store";

import {
  createRitualDefuntariaDama,
  fetchRituaisDefuntariaDama,
} from "../../../../api/rituais";

async function fecthData(
  setRituais,
  setError,
  setLoading,
  setToken,
  setUser,
  token
) {
  try {
    const response = await fetchRituaisDefuntariaDama(setToken, setUser, token);
    setRituais(response.data);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
}

async function createRitual(
  ritualData,
  setRituais,
  setError,
  setLoading,
  setToken,
  setUser,
  token
) {
  try {
    await createRitualDefuntariaDama(ritualData, setToken, setUser, token);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
}

export default function Rituais(props) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [rituais, setRituais] = useState([]);
  const [showNewRitualModal, setShowNewRitualModal] = useState(false);
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
      fecthData(setRituais, setError, setLoading, setToken, setUser, token);
    }
  }, [user, token]);

  // controles de gerenciamento de dados
  const handleCreateRitual = useCallback(
    async (ritual) => {
      createRitual(
        ritual,
        setRituais,
        setError,
        setLoading,
        setToken,
        setUser,
        token
      );
      fecthData(setRituais, setError, setLoading, setToken, setUser, token);
    },
    [token]
  );
  const handleDeleteRitual = useCallback(
    async (ritual) => {
      // createRitual(
      //   ritual,
      //   setRituais,
      //   setError,
      //   setLoading,
      //   setToken,
      //   setUser,
      //   token
      // );
      fecthData(setRituais, setError, setLoading, setToken, setUser, token);
    },
    [token]
  );

  const handleClickNewRitualButton = useCallback(() => {
    // setShowNewUserModal(true);
  }, []);

  const handleNewRitualClose = useCallback(() => {
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
      <RituaisTable
        loading={loading}
        rituais={rituais}
        handleNewRitual={handleClickNewRitualButton}
        handleDeleteRitual={handleDeleteRitual}
      />
    </>
  );
}
