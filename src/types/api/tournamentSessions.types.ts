import type { ApiResponse, MessageResponse, TournamentSession } from '@/types';

export type AddTournamentSessionResponse = ApiResponse<TournamentSession>

export type FinishTournamentSessionPayload = {
  id: string
}

export type FinishTournamentSessionResponse = ApiResponse<TournamentSession>

export type DeleteTournamentSessionPayload = {
  id: string
}

export type DeleteTournamentSessionResponse = MessageResponse
