import { useQuery } from '@tanstack/react-query';
import { fetchBalances } from '@/api/balance';
import { useAuth } from '@/context/AuthContext';

export const useBalances = () => {
  const { accessToken } = useAuth();

  return useQuery({
    queryKey: ['balances'],
    queryFn: () => fetchBalances(accessToken),
  });
};
