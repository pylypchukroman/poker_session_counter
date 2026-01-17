import { useQuery } from '@tanstack/react-query';
import { fetchTournamentSessions } from '@/api/tornamentSessions';
import { useAuth } from '@/context/AuthContext';

export const useTournamentSessions = () => {
  const { accessToken } = useAuth();

  return useQuery({
    queryKey: ['tournament_sessions'],
    queryFn: () => fetchTournamentSessions(accessToken),
  });
};
