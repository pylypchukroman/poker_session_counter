import { useQuery } from '@tanstack/react-query';
import { fetchCashSessions } from '@/api/cashSession';
import { useAuth } from '@/context/AuthContext';
import type { CashSession } from '@/types';


export const useCashSessions = () => {
  const { accessToken } = useAuth();

  return useQuery<CashSession[], Error>({
    queryKey: ['cash_sessions'],
    queryFn: () => fetchCashSessions(accessToken),
  });
};
