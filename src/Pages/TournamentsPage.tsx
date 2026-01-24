
import { TournamentSessionsList } from '@/сomponents/TournamentSessionsList';
import { AddNewTournamentSession } from '@/сomponents/AddNewTournamentSession';
import { RunningTournamentSessionSection } from '@/сomponents/RunningTournamentSessionSection';
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
