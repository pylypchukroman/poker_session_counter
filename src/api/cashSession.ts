import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/cash_sessions';

export const fetchCashSessions = async (token) => {
  const { data } = await axios.get(BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return data;
};

export const deleteCashSession = async ({ id, token}) => {
  if (!token) {
    throw new Error("No access token");
  }

  return axios.delete(`${BASE_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addCashSession = async ({ body, token }) => {
  if (!token) {
    throw new Error("No access token");
  }
  const normalizedBody = body.map(({ id, owner, ...rest }) => rest);
  return axios.post(`${BASE_URL}`, {
    balancesStart: normalizedBody,
    startedAt: new Date().toISOString(),
    status: "running",
    balancesEnd: []
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const finishCashSession = async ({ id, body, token }) => {
  if (!token) {
    throw new Error("No access token");
  }
  const normalizedBody = body.map(({ id, owner, ...rest }) => rest)
  return axios.patch(`${BASE_URL}/${id}/session`, {
    balancesEnd: normalizedBody,
    finishedAt: new Date().toISOString(),
    status: "finished",
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
