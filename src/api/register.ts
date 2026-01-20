import axios from 'axios';
import type { RegisterPayload, RegisterResponse } from '@/types';

const BASE_URL = 'http://localhost:3000/api/auth/register';

export const registerUser = async (body: RegisterPayload): Promise<RegisterResponse> => {
  const { data } = axios.post(`${BASE_URL}`, {
    name: body.name,
    email: body.email,
    password: body.password
  })
  return data;
};
