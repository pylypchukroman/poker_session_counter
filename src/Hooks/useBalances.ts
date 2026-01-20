import { useQuery } from '@tanstack/react-query';
import { fetchBalances } from '@/api/balance';
import { useAuth } from '@/context/AuthContext';
import type { Room } from '@/types';

export const useBalances = () => {
  const { accessToken } = useAuth();

  return useQuery<Room[], Error>({
    queryKey: ['balances'],
    queryFn: () => fetchBalances(accessToken),
  });
};
