import { useQuery } from '@tanstack/react-query';
import { fetchTournamentSessions } from '@/api/tornamentSessions';
import { useAuth } from '@/context/AuthContext';
import type { TournamentSession } from '@/types';

export const useTournamentSessions = () => {
  const { accessToken } = useAuth();

  return useQuery<TournamentSession[], Error>({
    queryKey: ['tournament_sessions'],
    queryFn: () => fetchTournamentSessions(accessToken),
  });
};
