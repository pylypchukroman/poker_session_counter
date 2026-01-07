import { ScrollArea } from '@/Components/ui/scroll-area';
import { Separator } from '@/Components/ui/separator';
import { useTournaments } from '@/Hooks/useTournaments';
import { FinishTournamentPopover } from '@/Components/FinishTournamentPopover';

export const SessionTournaments = ({ runningSessionId }) => {
  const {data: sessionTournaments, isLoading} = useTournaments(runningSessionId);

  return (
    <ScrollArea className="h-64 w-full">
      <ul>
        {sessionTournaments?.map((tournament) => (
          <li key={tournament.id}>
            <div className="text-sm flex gap-4 flex items-center justify-between">
              <p>Status: {tournament.status}</p>
              <p>Room: Stars!!!!!!</p>
              <p>Name: {tournament.name}</p>
              <p>Buy-In: {tournament.buyIn}</p>
              <p>Pay out: {tournament.result}</p>
              <p>Result: {tournament.result - tournament.buyIn}</p>
              <FinishTournamentPopover
                tournamentName={tournament.name}
                tournamentId={tournament.id}
                runningSessionId={runningSessionId}
                tournamentStatus={tournament.status}
              />
            </div>
            <Separator className="my-2" />
          </li>
        ))}
      </ul>
    </ScrollArea>
  )
}
