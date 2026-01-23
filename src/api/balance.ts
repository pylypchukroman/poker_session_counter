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

export const fetchBalances = async (): Promise<Room[]> => {
  const { data } = await api.get("/balances");

  return data;
};

export const editBalance = async ({ id, body }: EditBalancePayload): Promise<EditBalanceResponse> => {

  return api.patch(`/balances/${id}/balance`, {
    balance: body.balance
  });
};

export const deleteBalance = async ({ id }: DeleteBalancePayload): Promise<DeleteBalanceResponse> => {
  const { message } = api.delete(`/balances/${id}`);

  return message;
};

export const addBalance = async ({ body }: AddBalancePayload): Promise<AddBalanceResponse> => {

  return api.post("/balances", {
    name: body.name,
    balance: body.balance
  });
};
