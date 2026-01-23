import { useQuery } from '@tanstack/react-query';
import { fetchBalances } from '@/api/balance';
import type { Room } from '@/types';

export const useBalances = () => {

  return useQuery<Room[], Error>({
    queryKey: ['balances'],
    queryFn: () => fetchBalances(),
  });
};
