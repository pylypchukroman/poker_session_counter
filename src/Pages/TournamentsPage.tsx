import { Header } from '@/Components/Header';
import { TournamentSessionsList } from '@/Components/TournamentSessionsList';
import { useTournamentSessions } from '@/Hooks/useTournamentSessions';

export const TournamentsPage = () => {
  const {data: tournamentSessions, isLoading} = useTournamentSessions();

  return (
    <>
      <Header />
      <div className="bg-black w-screen h-lvh">
        <TournamentSessionsList tournamentSessions={tournamentSessions}/>
      </div>
    </>
  )
}
