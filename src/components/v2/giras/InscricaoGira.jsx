import React, { useState } from "react";
import { useMutation } from "react-query";
import { Alert } from "react-bootstrap";

import FormInscricao from "../forms/FormInscricao";
import Loading from "../conteiners/Loader";

import api from "../../../services";

async function postGiraSubscription(formData) {
  try {
    const { data } = await api.post(
      `notificacoes/subscrever`,
      formData
    );
    return data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
}

export default function InscricaoGira() {
  const [showAlert, setShowAlert] = useState(false);
  const mutation = useMutation((formData) => postGiraSubscription(formData));

  function handleSubmitInscricao(e) {
    e.preventDefault();
    const formData = {
      name: e.target.formName.value.trim(),
      email: e.target.formEmail.value.trim(),
      phone: e.target.formPhone.value.trim(),
    };
    mutation.mutate(formData);
    setShowAlert(true);
  }

  console.log(mutation);
  return (
    <>
      {mutation.isLoading && <Loading />}

      {showAlert && mutation.isError && (
        <Alert
          variant={"danger"}
          onClose={() => setShowAlert(null)}
          dismissible
        >
          {mutation.error.message}
        </Alert>
      )}

      {showAlert && mutation.isSuccess && (
        <Alert
          variant={"success"}
          onClose={() => setShowAlert(null)}
          dismissible
        >
          Inscrição realizada com sucesso! Agora você receberá notificações por email sobre as próximas giras!
        </Alert>
      )}
      <FormInscricao handleSubmit={handleSubmitInscricao} />
    </>
  );
}
