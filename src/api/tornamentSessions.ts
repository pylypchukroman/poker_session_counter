import { api } from "@/api/axios"; // <-- важливо
import type {
  AddTournamentSessionResponse,
  DeleteTournamentSessionPayload,
  DeleteTournamentSessionResponse,
  FinishTournamentSessionPayload,
  FinishTournamentSessionResponse,
  TournamentSession
} from '@/types';


// const BASE_URL = 'http://localhost:3000/api/tournament_sessions';

export const fetchTournamentSessions = async (token): Promise<TournamentSession[]> => {
  const { data } = await api.get("/tournament_sessions");
  return data;
};

export const deleteTournamentSession = async ({ id, token }: DeleteTournamentSessionPayload): Promise<DeleteTournamentSessionResponse> => {
  if (!token) {
    throw new Error("No access token");
  }
  const { message } = api.delete(`/tournament_sessions/${id}`);
  return message;
};

export const addTournamentSession = async (token: string | null): Promise<AddTournamentSessionResponse> => {
  if (!token) {
    throw new Error("No access token");
  }

  return api.post("/tournament_sessions", {
    startedAt: new Date().toISOString(),
    status: "running",
  });
};

export const finishTournamentSession = async ({ id, token }: FinishTournamentSessionPayload): Promise<FinishTournamentSessionResponse> => {
  if (!token) {
    throw new Error("No access token");
  }

  return api.patch(`/tournament_sessions/${id}/finish_session`, {
    finishedAt: new Date().toISOString(),
    status: "finished",
  });
};
