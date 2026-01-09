import { useCashSessions } from '@/Hooks/useCashSessions';

export const useCashSessionData = () => {
  const { data: cashSession, isLoading } = useCashSessions();

  const runningSessionId = cashSession?.find(session => session.status === "running")?.id;

  const reversedCashSessions = cashSession?.slice().reverse();

  return { cashSession, isLoading, runningSessionId, reversedCashSessions }

}
