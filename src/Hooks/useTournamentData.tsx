import { useTournaments } from '@/Hooks/useTournaments';
import { useAuth } from '@/context/AuthContext';

export const useTournamentData = (runningSessionId?: string) => {
  const { accessToken } = useAuth();

  const {data: sessionTournaments, isLoading} = useTournaments(runningSessionId, accessToken);

  const reversedTournamentSessions = sessionTournaments?.slice().reverse();

  return { sessionTournaments, isLoading, reversedTournamentSessions };
}
