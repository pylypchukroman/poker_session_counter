import axios from 'axios';
import type { Room } from '@/types/types';

const BASE_URL = 'http://localhost:3000/api/balances';

export const fetchBalances = async (token: string | null): Promise<[Room]> => {
  const { data } = await axios.get(BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  return data;
};

export const editBalance = async ({ id, body, token }) => {
  if (!token) {
    throw new Error("No access token");
  }

  return axios.patch(`${BASE_URL}/${id}/balance`, {
    balance: body.balance
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
};

export const deleteBalance = async ({ id, token}) => {
  if (!token) {
    throw new Error("No access token");
  }

  return axios.delete(`${BASE_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addBalance = async ({ body, token }) => {
  if (!token) {
    throw new Error("No access token");
  }

  return axios.post(`${BASE_URL}`, {
    name: body.name,
    balance: body.balance
  },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
};
