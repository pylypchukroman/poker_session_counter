import { useQuery } from '@tanstack/react-query';
import { fetchCashSessions } from '@/api/cashSession';
import type { CashSession } from '@/types';


export const useCashSessions = () => {

  return useQuery<CashSession[], Error>({
    queryKey: ['cash_sessions'],
    queryFn: () => fetchCashSessions(),
  });
};
