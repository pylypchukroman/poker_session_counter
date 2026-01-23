import { api } from "@/api/axios";
import type {
  AddBalancePayload,
  AddBalanceResponse,
  DeleteBalancePayload,
  DeleteBalanceResponse,
  EditBalancePayload,
  EditBalanceResponse,
  Room
} from '@/types';

export const fetchBalances = async (token: string | null): Promise<Room[]> => {
  const { data } = await api.get("/balances");

  return data;
};

export const editBalance = async ({ id, body, token }: EditBalancePayload): Promise<EditBalanceResponse> => {
  if (!token) {
    throw new Error("No access token");
  }

  return api.patch(`/balances/${id}/balance`, {
    balance: body.balance
  });
};

export const deleteBalance = async ({ id, token}: DeleteBalancePayload): Promise<DeleteBalanceResponse> => {
  if (!token) {
    throw new Error("No access token");
  }

  const { message } = api.delete(`/balances/${id}`);
  return message;
};

export const addBalance = async ({ body, token }: AddBalancePayload): Promise<AddBalanceResponse> => {
  if (!token) {
    throw new Error("No access token");
  }

  return api.post("/balances", {
    name: body.name,
    balance: body.balance
  });
};
