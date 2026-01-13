import { Header } from '@/Components/Header';
import { TournamentSessionsList } from '@/Components/TournamentSessionsList';
import { AddNewTournamentSession } from '@/Components/AddNewTournamentSession';
import { RunningTournamentSessionSection } from '@/Components/RunningTournamentSessionSection';
import { useTournamentSessionData } from '@/Hooks/useTournamentSessionData';

export const TournamentsPage = () => {
const { reversedTournamentSessions, isSessionRunning, runningSessionId } = useTournamentSessionData();

  return (
    <div className="flex flex-col gap-y-4">
      <TournamentSessionsList tournamentSessions={reversedTournamentSessions}/>
      {isSessionRunning ? <RunningTournamentSessionSection runningSessionId={runningSessionId}/> : <AddNewTournamentSession />}
    </div>
  );
};
