import { useTournamentSessions } from '@/Hooks/useTournamentSessions';
import type { TournamentSession } from '@/types/types';

export const useTournamentSessionData = () => {
  const {data: tournamentSessions, isLoading} = useTournamentSessions();

  const reversedTournamentSessions: TournamentSession[] = tournamentSessions?.slice().reverse();

  const isSessionRunning: boolean = reversedTournamentSessions?.some(session => session.status === "running");

  const runningSessionId: string = tournamentSessions?.find(session => session.status === "running")?.id;

  return { tournamentSessions, isLoading, reversedTournamentSessions, isSessionRunning, runningSessionId };
};
