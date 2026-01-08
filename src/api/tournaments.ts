import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/tournament_sessions';

export const fetchTournaments = async (sessionId) => {
  const { data } = await axios.get(`${BASE_URL}/${sessionId}/tournaments`);
  return data;
};

export const deleteTournament = async ({runningSessionId, tournamentId}) => {
  console.log("here")
  return axios.delete(`${BASE_URL}/${runningSessionId}/tournaments/${tournamentId}`);
};

export const addTournament = async (payload) => {

  return axios.post(`${BASE_URL}/${payload.runningSessionId}/tournaments`, {
    startedAt: new Date().toISOString(),
    status: "running",
    name: payload.name,
    buyIn: payload.buyIn,
    room: payload.room,
    result: 0
  });
};

export const finishTournament = async ({runningSessionId, tournamentId, result}) => {

  return axios.patch(`${BASE_URL}/${runningSessionId}/tournaments/${tournamentId}/finish_tournament`, {
    finishedAt: new Date().toISOString(),
    status: "finished",
    result: result
  });
};
