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

export async function fetchGroupData(group_id, setToken, setUser, token) {
  try {
    const { data } = await api.get(`/groups/${group_id}/data`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return {
      success: true,
      successMessage: "Dados do grupo carregados com sucesso.",
      data,
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

export async function patchUserOfGroup(data, setToken, setUser, token) {
  try {
    await api.patch(`/groups`, data, {
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

export async function createGroup(group_name, setToken, setUser, token) {
  try {
    await api.post(
      `/groups`,
      { group_name },
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

export async function updateGroup(group, setToken, setUser, token) {
  try {
    await api.put(
      `/groups`,
      { group_id: group.group_id, group_name: group.group_name },
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

export async function deleteGroup(group_id, setToken, setUser, token) {
  try {
    await api.delete(`/groups/${group_id}`, {
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
