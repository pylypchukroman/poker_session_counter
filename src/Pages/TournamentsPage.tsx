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
      <div className="bg-black w-screen h-lvh">
        <TournamentSessionsList tournamentSessions={reversedTournamentSessions}/>
        {isSessionRunning ? <RunningTournamentSessionSection runningSessionId={runningSessionId}/> : <AddNewTournamentSession />}
      </div>
    </>
  );
};
