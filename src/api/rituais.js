import api from "../services/index";

export async function fetchRituaisDefuntariaDama(setToken, setUser, token) {
  try {
    const { data } = await api.get(`/rituais/defuntaria-dama-da-noite/listar`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return {
      success: true,
      successMessage: "Rituais carregados com sucesso.",
      data: data.rituais,
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

export async function createRitualDefuntariaDama(
  ritual,
  setToken,
  setUser,
  token
) {
  try {
    await api.post(`/rituais/defuntaria-dama-da-noite/novo`, ritual, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return {
      success: true,
      successMessage: "Ritual criado com sucesso.",
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

export async function fetchInscritosRitualDefuntariaDama(
  id,
  setToken,
  setUser,
  token
) {
  try {
    const { data } = await api.get(
      `/rituais/defuntaria-dama-da-noite/inscricoes/inscritos/${id}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      success: true,
      successMessage: "Inscritos carregados com sucesso.",
      data: data.inscritos,
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
