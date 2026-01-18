import { useCashSessions } from '@/Hooks/useCashSessions';
import type { CashSession } from '@/types/types';

export const useCashSessionData = () => {
  const { data: cashSession, isLoading } = useCashSessions();

  const runningSessionId: string = cashSession?.find(session => session.status === "running")?.id;

  const reversedCashSessions: CashSession[] = cashSession?.slice().reverse();

  const isSessionRunning: boolean = reversedCashSessions?.some(session => session.status === "running");

  return { cashSession, isLoading, runningSessionId, reversedCashSessions, isSessionRunning };
}
