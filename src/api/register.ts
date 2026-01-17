import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/auth/register';

export const registerUser = async (body) => {
  return axios.post(`${BASE_URL}`, {
    name: body.name,
    email: body.email,
    password: body.password
  })
};
