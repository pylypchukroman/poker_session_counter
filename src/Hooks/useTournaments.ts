import { useQuery } from '@tanstack/react-query';
import { fetchTournaments } from '@/api/tournaments';
import type { SessionTournament } from '@/types';

export const useTournaments = (sessionId, token) => {
  return useQuery<SessionTournament[], Error>({
    queryKey: ['tournaments'],
    queryFn: () => fetchTournaments({ sessionId, token}),
  });
};
