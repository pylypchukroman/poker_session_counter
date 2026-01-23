import { api } from "@/api/axios"; // <-- важливо
import type {
  AddCashSessionPayload,
  AddCashSessionResponse,
  DeleteCashSessionPayload,
  DeleteCashSessionResponse,
  FinishCashSessionPayload,
  FinishCashSessionResponse
} from '@/types';


// const BASE_URL = 'http://localhost:3000/api/cash_sessions';

export const fetchCashSessions = async (token) => {
  const { data } = await api.get("/cash_sessions");
  return data;
};

export const deleteCashSession = async ({ id, token}: DeleteCashSessionPayload): Promise<DeleteCashSessionResponse> => {
  if (!token) {
    throw new Error("No access token");
  }

  const { message } = api.delete(`$/cash_sessions/${id}`);
  return message;
};

export const addCashSession = async ({ body, token }: AddCashSessionPayload): Promise<AddCashSessionResponse> => {
  if (!token) {
    throw new Error("No access token");
  }
  const normalizedBody = body.map(({ id, owner, ...rest }) => rest);
  return api.post("/cash_sessions", {
    balancesStart: normalizedBody,
    startedAt: new Date().toISOString(),
    status: "running",
    balancesEnd: []
  });
};

export const finishCashSession = async ({ id, body, token }: FinishCashSessionPayload): Promise<FinishCashSessionResponse> => {
  if (!token) {
    throw new Error("No access token");
  }
  const normalizedBody = body.map(({ id, owner, ...rest }) => rest)
  return api.patch(`/cash_sessions/${id}/session`, {
    balancesEnd: normalizedBody,
    finishedAt: new Date().toISOString(),
    status: "finished",
  });
};
