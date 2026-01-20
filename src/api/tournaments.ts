import axios from 'axios';
import type {
  AddTournamentPayload,
  AddTournamentResponse,
  DeleteTournamentPayload,
  DeleteTournamentResponse,
  FinishTournamentPayload,
  FinishTournamentResponse
} from '@/types';


const BASE_URL = 'http://localhost:3000/api/tournament_sessions';

export const fetchTournaments = async ({ sessionId, token}) => {
  const { data } = await axios.get(`${BASE_URL}/${sessionId}/tournaments`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return data;
};

export const deleteTournament = async ({runningSessionId, tournamentId, token}: DeleteTournamentPayload): Promise<DeleteTournamentResponse> => {
  const { message } = axios.delete(`${BASE_URL}/${runningSessionId}/tournaments/${tournamentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return message;
};

export const addTournament = async ({ body, token }: AddTournamentPayload): Promise<AddTournamentResponse> => {

  return axios.post(`${BASE_URL}/${body.runningSessionId}/tournaments`, {
    startedAt: new Date().toISOString(),
    status: "running",
    name: body.name,
    buyIn: body.buyIn,
    room: body.room,
    result: 0
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
};

export const finishTournament = async ({ runningSessionId, tournamentId, result, accessToken }: FinishTournamentPayload): Promise<FinishTournamentResponse> => {

  return axios.patch(`${BASE_URL}/${runningSessionId}/tournaments/${tournamentId}/finish_tournament`, {
    finishedAt: new Date().toISOString(),
    status: "finished",
    result: result
  }, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  });
};
