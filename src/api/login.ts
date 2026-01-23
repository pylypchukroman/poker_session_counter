import { api } from "@/api/axios";
import type { LoginPayload, LoginResponse } from "@/types";

export const loginUser = async (body: LoginPayload): Promise<LoginResponse> => {
  const { data } = await api.post("/auth/login", {
    email: body.email,
    password: body.password,
  });

  return data;
};
