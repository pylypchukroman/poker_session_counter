import axios from 'axios';
import type { LogoutResponse } from '@/types';

const BASE_URL = 'http://localhost:3000/api/auth/logout';

export const logoutUser = async (accessToken: string | null): Promise<LogoutResponse> => {

  await axios.get(`${BASE_URL}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  });
};
