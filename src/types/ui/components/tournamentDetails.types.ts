import type { SessionTournament } from '@/types';

export type TournamentStatus =
  | 'pending'
  | 'running'
  | 'finished'

export type FinishTournamentPopoverProps = {
  tournamentName: string
  tournamentId: string
  runningSessionId: string
  tournamentStatus: TournamentStatus
  tournamentRoom: string
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
