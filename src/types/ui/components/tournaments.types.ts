import { Dispatch, SetStateAction } from 'react';
import type { Tournament, TournamentSession } from '@/types';

export type AddNewTournamentToSessionProps = {
  runningSessionId: string
}

export type TournamentSessionsListProps = {
  tournamentSessions: TournamentSession[]
}

export type TournamentSessionItemProps = {
  session: TournamentSession
}

export type TournamentInputProps = {
  tournament: Tournament
  setTournament: Dispatch<SetStateAction<Tournament>>
  room: string | null
}
