import { useQuery } from '@tanstack/react-query';
import { fetchBalances } from '@/api/balance';

export const useBalances = () => {
  return useQuery({
    queryKey: ['balances'],
    queryFn: fetchBalances,
  });
};
