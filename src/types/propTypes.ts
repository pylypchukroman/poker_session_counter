import { CashSession, Room, SessionTournament, Tournament, TournamentSession } from '@/types/types';
import { Dispatch, SetStateAction } from 'react';

export type AddNewTournamentToSessionProps = {
  runningSessionId: string
}

export type CashSessionsListProps = {
  cashSession: CashSession[]
}

export type CashSessionItemProps = {
  session: CashSession
}

export type FinishTournamentPopoverProps = {
  tournamentName: string
  tournamentId: string
  runningSessionId: string
  tournamentStatus: string
  tournamentRoom: string
}

export type InfoBlockProps = {
  label: string
  value: string
  valueClass?: string
}

export type PokerRoomProps = {
  roomBalance: Room
}

export type RoomInputProps = {
  room: string | null
  setRoom: (room) => void
}

export type TournamentSessionsListProps = {
  tournamentSessions:  TournamentSession[]
}

export type TournamentSessionItemProps = {
  session: TournamentSession
}

export type TournamentInputProps = {
  tournament: Tournament
  setTournament: Dispatch<SetStateAction<Tournament>>
  room: string | null
}

export type TournamentDetailsPopoverProps = {
  startDate: string
  finishDate: string
  totalBuyIns: number
  totalResult: number
  sessionResult: number
  tournaments: SessionTournament[]
}

export type TournamentDetailsListProps = {
  tournaments: SessionTournament[]
}
