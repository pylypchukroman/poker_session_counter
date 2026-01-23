import { useTournaments } from '@/Hooks/useTournaments';
import type { SessionTournament } from '@/types';

export const useTournamentData = (runningSessionId?: string) => {

  const {data: sessionTournaments, isLoading} = useTournaments(runningSessionId);

  const reversedTournamentSessions: SessionTournament[] = sessionTournaments?.slice().reverse();

  return { sessionTournaments, isLoading, reversedTournamentSessions };
}
