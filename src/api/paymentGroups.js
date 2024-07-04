import api from "../services/index";

export async function fetchPaymentGroups(setToken, setUser, token) {
  try {
    const { data } = await api.get(`/billing-value-groups`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return {
      success: true,
      successMessage: "Grupos de pagamento carregados com sucesso.",
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

export async function fetchPaymentGroupUsers(id, setToken, setUser, token) {
  try {
    const { data } = await api.get(`/billing-value-groups/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return {
      success: true,
      successMessage: "Dados do grupo de pagamento carregados com sucesso.",
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

export async function createPaymentGroup(payload, setToken, setUser, token) {
  try {
    await api.post(
      `/billing-value-groups`,
      { ...payload },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      success: true,
      successMessage: "Grupo criado com sucesso.",
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

export async function updatePaymentGroup(payload, setToken, setUser, token) {
  try {
    await api.put(
      `/billing-value-groups`,
      { ...payload },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      success: true,
      successMessage: "Grupo atualizado com sucesso.",
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

export async function deletePaymentGroup(id, setToken, setUser, token) {
  try {
    await api.delete(`/billing-value-groups/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return {
      success: true,
      successMessage: "Grupo removido com sucesso.",
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

export async function updateUserPaymentGroup(
  userData,
  setToken,
  setUser,
  token
) {
  try {
    const { data } = await api.patch(
      `/billing-user-groups/change-user-group`,
      {
        user_email: userData.user_email,
        billing_group_id: userData.billing_group_id,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      success: true,
      successMessage: "Grupo de pagamento do usuário atualizado com sucesso.",
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

export async function bulkAddUsersPaymentGroup(
  payload,
  setToken,
  setUser,
  token
) {
  try {
    await api.post(
      `/billing-value-groups/users`,
      { ...payload },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      success: true,
      successMessage: "Grupo criado com sucesso.",
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
