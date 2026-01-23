import type { ApiResponse, MessageResponse, SessionTournament } from '@/types';

export type TournamentBody = {
  runningSessionId: string
  room: string | null
  name: string
  buyIn: number
}

export type AddTournamentPayload = {
  body: TournamentBody
}

export type DeleteTournamentPayload = {
  runningSessionId: string
  tournamentId: string
}

export type DeleteTournamentResponse = MessageResponse

export type FinishTournamentPayload = {
  runningSessionId: string
  tournamentId: string
  result: number
}

export type AddTournamentResponse = ApiResponse<SessionTournament>

export type FinishTournamentResponse = ApiResponse<SessionTournament>
