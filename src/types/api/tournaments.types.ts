import type { ApiResponse, MessageResponse, SessionTournament } from '@/types';

export type TournamentBody = {
  runningSessionId: string
  room: string | null
  name: string
  buyIn: number
}

export type AddTournamentPayload = {
  body: TournamentBody
  token: string | null
}

export type AddTournamentResponse = ApiResponse<SessionTournament>

export type DeleteTournamentPayload = {
  runningSessionId: string
  tournamentId: string
  token: string | null
}

export type DeleteTournamentResponse = MessageResponse

export type FinishTournamentPayload = {
  runningSessionId: string
  tournamentId: string
  result: number
  accessToken: string | null
}

export type FinishTournamentResponse = ApiResponse<SessionTournament>
