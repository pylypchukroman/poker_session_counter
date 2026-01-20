import type { SessionStatus } from '@/types';

export type BaseTournament = {
  name: string
}

export type Tournament = BaseTournament & {
  buyIn: number
}

export type TournamentResult = Tournament & {
  result: number
}

export type SessionTournament = {
  id: string
  name: string
  room: string
  buyIn: number
  result: number
  status: SessionStatus
  startedAt: string
  finishedAt: string
}

export type TournamentSession = {
  id: string
  ownerId: string
  startedAt: string
  finishedAt: string
  status: SessionStatus
  tournaments: SessionTournament[]
}
