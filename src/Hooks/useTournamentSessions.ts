import { useQuery } from '@tanstack/react-query';
import { fetchTournamentSessions } from '@/api/tornamentSessions';
import type { TournamentSession } from '@/types';

export const useTournamentSessions = () => {

  return useQuery<TournamentSession[], Error>({
    queryKey: ['tournament_sessions'],
    queryFn: () => fetchTournamentSessions(),
  });
};
