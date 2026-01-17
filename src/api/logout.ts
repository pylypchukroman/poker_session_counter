import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/auth/logout';

export const logoutUser = async (accessToken) => {

  await axios.get(`${BASE_URL}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  });
};
