import axios from 'axios';
import type {
  AddTournamentSessionResponse, DeleteTournamentSessionPayload, DeleteTournamentSessionResponse,
  FinishTournamentSessionPayload,
  FinishTournamentSessionResponse
} from '@/types/api';
import type { TournamentSession } from '@/types/types';

const BASE_URL = 'http://localhost:3000/api/tournament_sessions';

export const fetchTournamentSessions = async (token): Promise<TournamentSession[]> => {
  const { data } = await axios.get(BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return data;
};

export const deleteTournamentSession = async ({ id, token }: DeleteTournamentSessionPayload): Promise<DeleteTournamentSessionResponse> => {
  if (!token) {
    throw new Error("No access token");
  }
  const { message } = axios.delete(`${BASE_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return message;
};

export const addTournamentSession = async (token: string | null): Promise<AddTournamentSessionResponse> => {
  if (!token) {
    throw new Error("No access token");
  }

  return axios.post(`${BASE_URL}`, {
    startedAt: new Date().toISOString(),
    status: "running",
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const finishTournamentSession = async ({ id, token }: FinishTournamentSessionPayload): Promise<FinishTournamentSessionResponse> => {
  if (!token) {
    throw new Error("No access token");
  }

  return axios.patch(`${BASE_URL}/${id}/finish_session`, {
    finishedAt: new Date().toISOString(),
    status: "finished",
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
