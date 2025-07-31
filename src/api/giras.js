import api from "../services/index";

export const fetchGiras = async (page = 1, limit = 10, token) => {
  const res = await api.get(`/giras?page=${page}&limit=${limit}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const fetchAssistenciaByName = async (query, token) => {
  const res = await api.get(`/giras/assistencia`, {
    params: { name: query },
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const fetchAssistencia = async (giraId, token) => {
  const res = await api.get(`/giras/${giraId}/assistencia`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const createGira = async (data, token) => {
  const res = await api.post(`/giras`, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const deleteGira = async (giraId, token) => {
  const res = await api.delete(`/giras/${giraId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const addAssistencia = async (giraId, data, token) => {
  const res = await api.post(`/giras/${giraId}/assistencia`, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const deleteAssistencia = async (giraId, assistenciaId, token) => {
  const res = await api.delete(
    `/giras/${giraId}/assistencia/${assistenciaId}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

export const patchCalledAssistencia = async (
  giraId,
  assistenciaId,
  data,
  token
) => {
  const res = await api.patch(
    `/giras/${giraId}/assistencia/${assistenciaId}/called`,
    data,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};
