import api from "../services/index";

export const fetchGiras = async (page = 1, limit = 10, token) => {
  const res = await api.get(`/giras?page=${page}&limit=${limit}`, {
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

export const addAssistencia = async (giraId, data, token) => {
  const res = await api.post(`/giras/${giraId}/assistencia`, data, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
