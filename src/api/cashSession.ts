import { api } from "@/api/axios"; // <-- важливо
import type {
  AddCashSessionPayload,
  AddCashSessionResponse,
  DeleteCashSessionPayload,
  DeleteCashSessionResponse,
  FinishCashSessionPayload,
  FinishCashSessionResponse
} from '@/types';

export const fetchCashSessions = async () => {
  const { data } = await api.get("/cash_sessions");
  return data;
};

export const deleteCashSession = async ({ id }: DeleteCashSessionPayload): Promise<DeleteCashSessionResponse> => {

  const { message } = api.delete(`$/cash_sessions/${id}`);
  return message;
};

export const addCashSession = async ({ body }: AddCashSessionPayload): Promise<AddCashSessionResponse> => {
  const normalizedBody = body.map(({ id, owner, ...rest }) => rest);

  return api.post("/cash_sessions", {
    balancesStart: normalizedBody,
    startedAt: new Date().toISOString(),
    status: "running",
    balancesEnd: []
  });
};

export const finishCashSession = async ({ id, body }: FinishCashSessionPayload): Promise<FinishCashSessionResponse> => {
  const normalizedBody = body.map(({ id, owner, ...rest }) => rest);

  return api.patch(`/cash_sessions/${id}/session`, {
    balancesEnd: normalizedBody,
    finishedAt: new Date().toISOString(),
    status: "finished",
  });
};
