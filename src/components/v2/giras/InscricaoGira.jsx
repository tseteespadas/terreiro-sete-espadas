import React, { useState } from "react";
import { useMutation } from "react-query";
import { Alert } from "react-bootstrap";

import FormInscricaoGira from "../forms/FormInscricaoGira";
import Loading from "../conteiners/Loader";

import { useProxGira } from "../../../store";
import api from "../../../services";

async function postGiraSubscription(formData) {
  try {
    const { data } = await api.post(
      `assistencia/inscricao/${formData.giraId}`,
      formData
    );
    return data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
}

export default function InscricaoGira() {
  const [showAlert, setShowAlert] = useState(false);
  const proxGira = useProxGira();
  const mutation = useMutation((formData) => postGiraSubscription(formData));

  function handleSubmitInscricao(e) {
    e.preventDefault();
    const formData = {
      giraId: proxGira._id,
      name: e.target.formName.value.trim(),
      email: e.target.formEmail.value.trim(),
      phone: e.target.formPhone.value.trim(),
    };
    mutation.mutate(formData);
    setShowAlert(true);
  }

  if (!proxGira) {
    return <></>;
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
          Inscrição realizada com sucesso!
        </Alert>
      )}
      <FormInscricaoGira handleSubmit={handleSubmitInscricao} />
    </>
  );
}
