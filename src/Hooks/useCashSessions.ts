import { useQuery } from '@tanstack/react-query';
import { fetchCashSessions } from '@/api/cashSession';
import { useAuth } from '@/context/AuthContext';

export const useCashSessions = () => {
  const { accessToken } = useAuth();

  return useQuery({
    queryKey: ['cash_sessions'],
    queryFn: () => fetchCashSessions(accessToken),
  });
};
