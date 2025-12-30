import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/balances';

export const fetchBalances = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const editBalance = async ({ id, body }) => {
  return axios.patch(`${BASE_URL}/${id}/balance`, {
    balance: body.balance
  })
};

export const deleteBalance = async (id: string) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

export const addBalance = async (body) => {
  return axios.post(`${BASE_URL}`, {
    name: body.name,
    balance: body.balance
  });
};
