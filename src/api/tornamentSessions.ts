import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/tournament_sessions';

export const fetchTournamentSessions = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const deleteTournamentSession = async (id: string) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
