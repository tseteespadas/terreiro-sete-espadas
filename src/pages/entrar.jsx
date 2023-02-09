import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import FormLogin from "../components/v2/forms/FormLogin";
import api from "../services";
import { useSetToken, useSetUser, useSetMenuItems } from "../store";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const setToken = useSetToken();
  const setMenuItems = useSetMenuItems();
  const setUser = useSetUser();
  const history = useHistory();

  const postLogin = useCallback(async ({ email, password }) => {
    try {
      setLoading(true);
      const { data } = await api.post("/user/login", {
        email,
        password,
      });

      const token = data.token;
      const user = data.user;
      const menu = data.menu;
      setToken(token);
      localStorage.setItem("token", token);
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      setMenuItems(menu);
      localStorage.setItem("menu", JSON.stringify(menu));
      setError(null);
      setLoading(false);
      history.push("/dashboard")
    } catch (e) {
      if (e.response) {
        setError(e.response.data.message);
      } else {
        console.log(e);
        setError(
          "Ops! Parece que algo deu errado, tente novamente mais tarde. Se o erro persistir, entre em contato com o administrador."
        );
      }
      setLoading(false);
    }
  }, [history, setToken, setUser, setMenuItems]);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    const email = event.target.formEmail.value;
    const password = event.target.formPassword.value;

    await postLogin({ email, password });
  }, []);

  return (
    <>
      <FormLogin
        handleSubmit={handleSubmit}
        loading={loading}
        errorMessage={error}
      />
    </>
  );
}
