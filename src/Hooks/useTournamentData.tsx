import { useTournaments } from '@/Hooks/useTournaments';
import { useAuth } from '@/context/AuthContext';
import type { SessionTournament } from '@/types';

export const useTournamentData = (runningSessionId?: string) => {
  const { accessToken } = useAuth();

  const {data: sessionTournaments, isLoading} = useTournaments(runningSessionId, accessToken);

  const reversedTournamentSessions: SessionTournament[] = sessionTournaments?.slice().reverse();

  return { sessionTournaments, isLoading, reversedTournamentSessions };
}
