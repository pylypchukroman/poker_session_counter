import { useTournaments } from '@/Hooks/useTournaments';

export const useTournamentData = (runningSessionId?: string) => {
  const {data: sessionTournaments, isLoading} = useTournaments(runningSessionId);

  return { sessionTournaments, isLoading };
}
