import { useQuery } from '@tanstack/react-query';
import { fetchCashSessions } from '@/api/cashSession';

export const useCashSessions = () => {
  return useQuery({
    queryKey: ['cash_sessions'],
    queryFn: fetchCashSessions,
  });
};
