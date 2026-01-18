export type RoomBalance = {
  name: string
  balance: number
}

export type Balance = {
  room: string
  balance: number
}

export type SessionStatus = 'running' | 'finished'

export type SessionBalance = {
  id: string
  startedAt: string
  finishedAt: string | null
  status: SessionStatus
  balancesStart: Balance[]
  balancesEnd: Balance[]
}

type BaseTournament = {
  name: string
}

export type Tournament = BaseTournament & {
  buyIn: number
}

export type TournamentResult = Tournament & {
  result: number
}

export type Room = {
  id: string
  name: string
  balance: number
  owner: string
}

export type CashSession = {
  id: string
  owner: string
  startedAt: string
  finishedAt: string | null
  status: SessionStatus
  balancesStart: RoomBalance[]
  balancesEnd: RoomBalance[]
}

export type CashSessionsListProps = {
  cashSession: CashSession[]
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
  owner: string
  startedAt: string
  finishedAt: string
  status: SessionStatus
  tournaments: SessionTournament[]
}

export type Tokens = {
  accessToken: string
  refreshToken: string
}

export type User = {
  name: string
  email: string
}

export type AuthResponse = {
  user: User
  tokens: Tokens
}
