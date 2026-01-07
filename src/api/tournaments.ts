import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/tournament_sessions';

export const fetchTournaments = async (sessionId) => {
  const { data } = await axios.get(`${BASE_URL}/${sessionId}/tournaments`);
  return data;
};

export const deleteTournament = async (id: string) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

export const addTournament = async () => {

  return axios.post(`${BASE_URL}`, {
    startedAt: new Date().toISOString(),
    status: "running",
  });
};

export const finishTournament = async ({runningSessionId, tournamentId, result}) => {

  return axios.patch(`${BASE_URL}/${runningSessionId}/tournaments/${tournamentId}/finish_tournament`, {
    finishedAt: new Date().toISOString(),
    status: "finished",
    result: result
  });
};
