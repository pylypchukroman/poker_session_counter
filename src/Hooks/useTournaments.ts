import { useQuery } from '@tanstack/react-query';
import { fetchTournaments } from '@/api/tournaments';

export const useTournaments = (sessionId, token) => {
  return useQuery({
    queryKey: ['tournaments'],
    queryFn: () => fetchTournaments({ sessionId, token}),
  });
};
