import { api } from "@/api/axios"; // <-- важливо
import type {
  AddTournamentSessionResponse,
  DeleteTournamentSessionPayload,
  DeleteTournamentSessionResponse,
  FinishTournamentSessionPayload,
  FinishTournamentSessionResponse,
  TournamentSession
} from '@/types';

export const fetchTournamentSessions = async (): Promise<TournamentSession[]> => {
  const { data } = await api.get("/tournament_sessions");
  return data;
};

export const deleteTournamentSession = async ({ id }: DeleteTournamentSessionPayload): Promise<DeleteTournamentSessionResponse> => {
  const { message } = api.delete(`/tournament_sessions/${id}`);

  return message;
};

export const addTournamentSession = async (): Promise<AddTournamentSessionResponse> => {

  return api.post("/tournament_sessions", {
    startedAt: new Date().toISOString(),
    status: "running",
  });
};

export const finishTournamentSession = async ({ id }: FinishTournamentSessionPayload): Promise<FinishTournamentSessionResponse> => {

  return api.patch(`/tournament_sessions/${id}/finish_session`, {
    finishedAt: new Date().toISOString(),
    status: "finished",
  });
};
