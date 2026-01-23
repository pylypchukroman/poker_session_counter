import { api } from "@/api/axios"; // <-- важливо
import type { LogoutResponse } from '@/types';

export const logoutUser = async (accessToken: string | null): Promise<LogoutResponse> => {

  await api.get("/auth/logout");
};
