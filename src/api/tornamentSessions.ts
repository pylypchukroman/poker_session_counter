import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/tournament_sessions';

export const fetchTournamentSessions = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const deleteTournamentSession = async (id: string) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

export const addTournamentSession = async () => {

  return axios.post(`${BASE_URL}`, {
    startedAt: new Date().toISOString(),
    status: "running",
  });
};

export const finishTournamentSession = async (id) => {

  return axios.patch(`${BASE_URL}/${id}/finish_session`, {
    finishedAt: new Date().toISOString(),
    status: "finished",
  });
};
