import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CustomAlert from "../../components/v2/alert/CustomAlert";

import ConfirmAccountForm from "../../components/v2/forms/ConfirmAccountForm";

import api from "../../services";

const ConfirmAccountConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.black};
  height: 100%;
  width: 100%;
  .presentation-text {
    padding: 1rem;
    color: ${(props) => props.theme.colors.white};
    width: 100%;
    max-width: 320px;

    .important {
      color: ${(props) => props.theme.colors.green};
    }
    @media (min-width: 600px) {
      max-width: 450px;
    }
  }
`;

async function confirmAccount(payload, setError) {
  try {
    const { data } = await api.put(`/user/confirm`, payload);
    return data;
  } catch (err) {
    if (err.response) {
      setError(err.response.data.message);
    } else {
      setError(
        "Algo inexperado aconteceu. Tente novamente mais tarde e se o erro persistir, entre em contato com um administrador."
      );
    }
    return null;
  }
}

export default function ConfirmAccount(props) {
  const { user_id } = props;
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const password = event.target.formPassword.value;
      const confirmPassword = event.target.formConfirmPassword.value;
      if (password !== confirmPassword) {
        setErrorMessage("As senhas precisam ser iguais.");
        return;
      }
      setLoading(true);
      const data = await confirmAccount({ user_id, password }, setErrorMessage);
      setSuccessMessage(data.message);
      setLoading(false);
    },
    [user_id]
  );

  return (
    <ConfirmAccountConteiner>
      <div className="presentation-text">
        <p>Bem vinde!</p>
        <p>
          Falta só mais um passo para você poder acessar a área logada da
          Comunidade Ògún Onirê: vamos cadastrar uma senha para completar seu
          acesso. Fique tranquile pois os dados serão enviados para seu email
          assim que o cadastro for concluído.
        </p>
        <p className="important">
          Por motivos de segurança, sua senha precisa{" "}
          <strong>obrigatoriamente</strong> conter no mínimo 8 caracteres, 1
          caractere especial (@,!,?, etc.), uma letra maiúscula, uma letra
          minúscula e um número.
        </p>
        <p>Axé!</p>
        {successMessage ? (
          <CustomAlert variant="success">
            <p>{successMessage}</p>
            <p>
              Clique <Link to="/entrar">aqui</Link> para fazer login!
            </p>
          </CustomAlert>
        ) : null}
      </div>
      {!successMessage ? (
        <ConfirmAccountForm
          handleSubmit={handleSubmit}
          loading={loading}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      ) : null}
    </ConfirmAccountConteiner>
  );
}
