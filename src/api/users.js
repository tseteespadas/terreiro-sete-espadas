import api from "../services/index";

export async function fetchUsers(setToken, setUser, token) {
  try {
    const { data } = await api.get(`/v2/user/list`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return {
      success: true,
      successMessage: "Usuários carregados com sucesso.",
      data: data,
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
            error: true,
            data: null,
            errorMessage:
              "O serviço está fora do ar. Entre em contato com um administrador.",
          };
        }
        return {
          success: false,
          successMessage: null,
          error: true,
          data: null,
          errorMessage: err.response.data.message,
        };
      }
    } else {
      return {
        success: false,
        successMessage: null,
        error: true,
        data: null,
        errorMessage:
          "Algo inexperado aconteceu. Tente novamente mais tarde e se o erro persistir, entre em contato com um administrador.",
      };
    }
  }
}

export async function createUser(user, setToken, setUser, token) {
  try {
    await api.post(`/v2/user/create`, user, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return {
      success: true,
      successMessage: "Usuário criado com sucesso.",
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
            error: true,
            data: null,
            errorMessage:
              "O serviço está fora do ar. Entre em contato com um administrador.",
          };
        }
        return {
          success: false,
          successMessage: null,
          error: true,
          data: null,
          errorMessage: err.response.data.message,
        };
      }
    } else {
      return {
        success: false,
        successMessage: null,
        error: true,
        data: null,
        errorMessage:
          "Algo inexperado aconteceu. Tente novamente mais tarde e se o erro persistir, entre em contato com um administrador.",
      };
    }
  }
}

export async function updateUser(user, setToken, setUser, token) {
  try {
    await api.put(`/v2/user/update`, user, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return {
      success: true,
      successMessage: "Usuário atualizado com sucesso.",
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
            error: true,
            data: null,
            errorMessage:
              "O serviço está fora do ar. Entre em contato com um administrador.",
          };
        }
        return {
          success: false,
          successMessage: null,
          error: true,
          data: null,
          errorMessage: err.response.data.message,
        };
      }
    } else {
      return {
        success: false,
        successMessage: null,
        error: true,
        data: null,
        errorMessage:
          "Algo inexperado aconteceu. Tente novamente mais tarde e se o erro persistir, entre em contato com um administrador.",
      };
    }
  }
}

export async function deleteUser(userId, setToken, setUser, token) {
  try {
    await api.delete(`/v2/user/${userId}/delete`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    return {
      success: true,
      successMessage: "Usuário atualizado com sucesso.",
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
            error: true,
            data: null,
            errorMessage:
              "O serviço está fora do ar. Entre em contato com um administrador.",
          };
        }
        return {
          success: false,
          successMessage: null,
          error: true,
          data: null,
          errorMessage: err.response.data.message,
        };
      }
    } else {
      return {
        success: false,
        successMessage: null,
        error: true,
        data: null,
        errorMessage:
          "Algo inexperado aconteceu. Tente novamente mais tarde e se o erro persistir, entre em contato com um administrador.",
      };
    }
  }
}
