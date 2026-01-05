import { useQuery } from '@tanstack/react-query';
import { fetchTournamentSessions } from '@/api/tornamentSessions';

export const useTournamentSessions = () => {
  return useQuery({
    queryKey: ['tournament_sessions'],
    queryFn: fetchTournamentSessions,
  });
};
