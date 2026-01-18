import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/auth/login';

export const loginUser = async (body) => {
  const { data } = await axios.post(`${BASE_URL}`, {
    email: body.email,
    password: body.password
  })
  console.log(data)
  return data;
};
