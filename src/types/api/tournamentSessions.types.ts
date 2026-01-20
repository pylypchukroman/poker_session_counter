import type { ApiResponse, MessageResponse, TournamentSession } from '@/types';

export type AddTournamentSessionResponse = ApiResponse<TournamentSession>

export type FinishTournamentSessionPayload = {
  id: string
  token: string | null
}

export type FinishTournamentSessionResponse = ApiResponse<TournamentSession>

export type DeleteTournamentSessionPayload = {
  id: string
  token: string | null
}

export type DeleteTournamentSessionResponse = MessageResponse
