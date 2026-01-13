import { useTournaments } from '@/Hooks/useTournaments';

export const useTournamentData = (runningSessionId?: string) => {
  const {data: sessionTournaments, isLoading} = useTournaments(runningSessionId);

  const reversedTournamentSessions = sessionTournaments?.slice().reverse();

  return { sessionTournaments, isLoading, reversedTournamentSessions };
}
