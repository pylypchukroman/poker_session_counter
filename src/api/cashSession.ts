import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/cash_sessions';

export const fetchCashSessions = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const deleteCashSession = async (id: string) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

export const addCashSession = async (body) => {
  const normalizedBody = body.map(({ id, ...rest }) => rest)
  return axios.post(`${BASE_URL}`, {
    balancesStart: normalizedBody,
    startedAt: new Date().toISOString(),
    status: "running",
    balancesEnd: []
  });
};
