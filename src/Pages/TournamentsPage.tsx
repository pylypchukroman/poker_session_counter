import { Header } from '@/Components/Header';
import { TournamentSessionsList } from '@/Components/TournamentSessionsList';
import { AddNewTournamentSession } from '@/Components/AddNewTournamentSession';
import { RunningTournamentSessionSection } from '@/Components/RunningTournamentSessionSection';
import { useTournamentSessionData } from '@/Hooks/useTournamentSessionData';

export const TournamentsPage = () => {
const { reversedTournamentSessions, isSessionRunning, runningSessionId } = useTournamentSessionData();

  return (
    <>
      <Header />
      <div className="min-w-7xl flex items-center justify-between flex-col gap-y-4 bg-black p-4">
        <div className="bg-black max-w-7xl h-lvh">
          <TournamentSessionsList tournamentSessions={reversedTournamentSessions}/>
          {isSessionRunning ? <RunningTournamentSessionSection runningSessionId={runningSessionId}/> : <AddNewTournamentSession />}
        </div>
      </div>
    </>
  );
};
