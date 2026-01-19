import axios from 'axios';
import type { AddCashSessionPayload, DeleteCashSessionPayload, FinishCashSessionPayload } from '@/types/api';
import type { DeleteCashSessionResponse } from '@/types/api';
import type { AddCashSessionResponse } from '@/types/api';
import type { FinishCashSessionResponse } from '@/types/api';

const BASE_URL = 'http://localhost:3000/api/cash_sessions';

export const fetchCashSessions = async (token) => {
  const { data } = await axios.get(BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return data;
};

export const deleteCashSession = async ({ id, token}: DeleteCashSessionPayload): Promise<DeleteCashSessionResponse> => {
  if (!token) {
    throw new Error("No access token");
  }

  const { message } = axios.delete(`${BASE_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return message;
};

export const addCashSession = async ({ body, token }: AddCashSessionPayload): Promise<AddCashSessionResponse> => {
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

export const finishCashSession = async ({ id, body, token }: FinishCashSessionPayload): Promise<FinishCashSessionResponse> => {
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
