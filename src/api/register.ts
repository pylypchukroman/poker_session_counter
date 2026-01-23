import { api } from "@/api/axios";
import type { RegisterPayload, RegisterResponse } from '@/types';

export const registerUser = async (body: RegisterPayload): Promise<RegisterResponse> => {
  const { data } = api.post("/auth/register", {
    name: body.name,
    email: body.email,
    password: body.password
  })
  return data;
};
