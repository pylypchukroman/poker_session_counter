import { useTournamentSessions } from '@/Hooks/useTournamentSessions';

export const useTournamentSessionData = () => {
  const {data: tournamentSessions, isLoading} = useTournamentSessions();

  const reversedTournamentSessions = tournamentSessions?.slice().reverse();

  const isSessionRunning = reversedTournamentSessions?.some(session => session.status === "running");

  const runningSessionId = tournamentSessions?.find(session => session.status === "running")?.id;

  return { tournamentSessions, isLoading, reversedTournamentSessions, isSessionRunning, runningSessionId };
};
