import type { CashSession, Room, Tokens } from '@/types/types';
import type { User } from '@/context/AuthContext';
import { TournamentSession } from '@/types/types';

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
