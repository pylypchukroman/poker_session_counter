import axios from 'axios';
import type { LoginPayload, LoginResponse } from '@/types/api';

const BASE_URL = 'http://localhost:3000/api/auth/login';

export const loginUser = async (body: LoginPayload): Promise<LoginResponse> => {
  const { data } = await axios.post(`${BASE_URL}`, {
    email: body.email,
    password: body.password
  })

  return data;
};
