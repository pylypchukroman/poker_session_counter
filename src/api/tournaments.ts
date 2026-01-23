import { api } from "@/api/axios";
import type {
  AddTournamentPayload,
  AddTournamentResponse,
  DeleteTournamentPayload,
  DeleteTournamentResponse,
  FinishTournamentPayload,
  FinishTournamentResponse
} from '@/types';

export const fetchTournaments = async ({ sessionId, token}) => {
  const { data } = await api.get(`/tournament_sessions/${sessionId}/tournaments`);
  return data;
};

export const deleteTournament = async ({runningSessionId, tournamentId, token}: DeleteTournamentPayload): Promise<DeleteTournamentResponse> => {
  const { message } = api.delete(`/tournament_sessions/${runningSessionId}/tournaments/${tournamentId}`);
  return message;
};

export const addTournament = async ({ body, token }: AddTournamentPayload): Promise<AddTournamentResponse> => {

  return api.post(`/tournament_sessions/${body.runningSessionId}/tournaments`, {
    startedAt: new Date().toISOString(),
    status: "running",
    name: body.name,
    buyIn: body.buyIn,
    room: body.room,
    result: 0
  });
};

export const finishTournament = async ({ runningSessionId, tournamentId, result, accessToken }: FinishTournamentPayload): Promise<FinishTournamentResponse> => {

  return api.patch(`/tournament_sessions/${runningSessionId}/tournaments/${tournamentId}/finish_tournament`, {
    finishedAt: new Date().toISOString(),
    status: "finished",
    result: result
  });
};
