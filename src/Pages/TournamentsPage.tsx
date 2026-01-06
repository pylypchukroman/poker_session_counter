import { Header } from '@/Components/Header';
import { TournamentSessionsList } from '@/Components/TournamentSessionsList';
import { useTournamentSessions } from '@/Hooks/useTournamentSessions';
import { AddNewTournamentSession } from '@/Components/AddNewTournamentSession';
import { RunningTournamentSessionSection } from '@/Components/RunningTournamentSessionSection';

export const TournamentsPage = () => {
  const {data: tournamentSessions, isLoading} = useTournamentSessions();
  const reversedCashSessions = tournamentSessions?.slice().reverse();
  const isSessionRunning = reversedCashSessions?.some(session => session.status === "running");

  return (
    <>
      <Header />
      <div className="bg-black w-screen h-lvh">
        <TournamentSessionsList tournamentSessions={reversedCashSessions}/>
        {isSessionRunning ? <RunningTournamentSessionSection tournamentSessions={tournamentSessions}/> : <AddNewTournamentSession />}
      </div>
    </>
  )
}
