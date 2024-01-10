import api from "../services/index";

export async function fetchGroups(setToken, setUser, token) {
  try {
    const { data } = await api.get(`/groups`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return {
      success: true,
      successMessage: "Grupos carregados com sucesso.",
      data: data.groups,
      error: false,
      errorMessage: null,
    };
  } catch (err) {
    if (err.response) {
      if (err.response.status === 401 || err.response.status === 419) {
        alert("Sua sessão expirou. Faça login novamente e refaça a operação");
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        window.location.href = "/entrar";
      } else {
        if (
          err.response.status === 404 ||
          err.response.status === 502 ||
          err.response.status === 503
        ) {
          return {
            success: false,
            successMessage: null,
            data: null,
            error: true,
            errorMessage:
              "O serviço está fora do ar. Entre em contato com um administrador.",
          };
        }
        return {
          success: false,
          successMessage: null,
          data: null,
          error: true,
          errorMessage: err.response.data.message,
        };
      }
    } else {
      return {
        success: false,
        successMessage: null,
        data: null,
        error: true,
        errorMessage:
          "Algo inexperado aconteceu. Tente novamente mais tarde e se o erro persistir, entre em contato com um administrador.",
      };
    }
  }
}

export async function updateUserGroups(userGroups, setToken, setUser, token) {
  try {
    await api.put(
      `/groups/${userGroups.user_id}`,
      { groups: userGroups.groups },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      success: true,
      successMessage: "Grupos atualizados com sucesso.",
      data: null,
      error: false,
      errorMessage: null,
    };
  } catch (err) {
    if (err.response) {
      if (err.response.status === 401 || err.response.status === 419) {
        alert("Sua sessão expirou. Faça login novamente e refaça a operação");
        setToken(null);
        setUser(null);
        localStorage.removeItem("token");
        window.location.href = "/entrar";
      } else {
        if (
          err.response.status === 404 ||
          err.response.status === 502 ||
          err.response.status === 503
        ) {
          return {
            success: false,
            successMessage: null,
            data: null,
            error: true,
            errorMessage:
              "O serviço está fora do ar. Entre em contato com um administrador.",
          };
        }
        return {
          success: false,
          successMessage: null,
          data: null,
          error: true,
          errorMessage: err.response.data.message,
        };
      }
    } else {
      return {
        success: false,
        successMessage: null,
        data: null,
        error: true,
        errorMessage:
          "Algo inexperado aconteceu. Tente novamente mais tarde e se o erro persistir, entre em contato com um administrador.",
      };
    }
  }
}
