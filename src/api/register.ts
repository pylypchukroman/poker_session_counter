import { api } from "@/api/axios";
import type { RegisterPayload, RegisterResponse } from '@/types';
import axios from 'axios';
import { toast } from 'sonner';

export const registerUser = async (
  body: RegisterPayload
): Promise<RegisterResponse> => {
  try {
    const { data } = await api.post(
      "/auth/register",
      {
        name: body.name,
        email: body.email,
        password: body.password,
      }
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status === 409) {
        toast.error(`User with email ${body.email} already exist`)
      }
      throw new Error(
        error.response?.data?.message || "Registration failed"
      );
    }
    throw error;
  }
};
