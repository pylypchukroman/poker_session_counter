import type { CashSession, Room, Tokens } from '@/types/types';
import type { User } from '@/context/AuthContext';
import type { SessionTournament, TournamentSession } from '@/types/types';

export type LoginPayload = {
  email: string | File
  password: string | File
}

export type LoginResponse = {
  user: User
  tokens: Tokens
}

export type LogoutResponse = {
  message: string
}

export type RegisterPayload = {
  name: string | File
  email: string | File
  password: string | File
}

export type RegisterResponse = {
  email: string
  name: string
}

export type AddBalanceBody = {
  name: string
  balance: number
}

export type AddBalancePayload = {
  token: string | null
  body: AddBalanceBody
}

export type AddBalanceResponse = {
 data: Room
}

export type DeleteBalancePayload = {
  token: string | null
  id: string
}

export type DeleteBalanceResponse = {
  message: string
}

export type EditBalancePayload = {
  token: string | null
  body: AddBalanceBody
  id: string
}

export type EditBalanceResponse = {
  data: Room
}


export type DeleteCashSessionPayload = {
  token: string | null
  id: string
}

export type DeleteCashSessionResponse = {
  message: string
}

export type AddCashSessionPayload = {
  token: string | null
  body: CashSession[]
}

export type AddCashSessionResponse = {
  data: CashSession
}


export type FinishCashSessionPayload = {
  token: string | null
  body: Room[]
  id: string
}

export type FinishCashSessionResponse = {
  data: CashSession
}

export type AddTournamentSessionResponse = {
  data: TournamentSession
}

export type FinishTournamentSessionPayload = {
  token: string | null
  id: string
}

export type FinishTournamentSessionResponse = {
  data: TournamentSession
}


export type DeleteTournamentSessionResponse = {
  message: string
}

export type DeleteTournamentSessionPayload = {
  token: string | null
  id: string
}

export type TournamentBody = {
  runningSessionId: string
  room: string | null
  name: string
  buyIn: number
}

export type AddTournamentPayload = {
  token: string | null
  body: TournamentBody
}

export type AddTournamentResponse = {
  data: SessionTournament
}


export type DeleteTournamentPayload = {
  token: string | null
  runningSessionId: string
  tournamentId: string
}

export type DeleteTournamentResponse = {
  message: string
}

export type FinishTournamentPayload = {
  accessToken: string | null
  runningSessionId: string
  tournamentId: string
  result: number
}

export type FinishTournamentResponse = {
  data: SessionTournament
}
