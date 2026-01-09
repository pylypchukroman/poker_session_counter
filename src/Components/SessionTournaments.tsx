import { ScrollArea } from '@/Components/ui/scroll-area';
import { Separator } from '@/Components/ui/separator';
import { useTournaments } from '@/Hooks/useTournaments';
import { FinishTournamentPopover } from '@/Components/FinishTournamentPopover';
import { Button } from '@/Components/ui/button';
import { useDeleteTournament } from '@/Hooks/useTournamentsMutation';

export const SessionTournaments = ({ runningSessionId }) => {
  const {data: sessionTournaments, isLoading} = useTournaments(runningSessionId);
  const deleteTournament = useDeleteTournament()

  return (
    <ScrollArea className="h-64 w-full">
      <ul>
        {sessionTournaments?.map((tournament) => (
          <li key={tournament.id}>
            <div className="text-sm flex gap-4 flex items-center justify-between">
              <p>Status: {tournament.status}</p>
              <p>Room: {tournament.room}</p>
              <p>Name: {tournament.name}</p>
              <p>Buy-In: {tournament.buyIn}</p>
              <p>Pay out: {tournament.result}</p>
              <p>Result: {tournament.result - tournament.buyIn}</p>
              <FinishTournamentPopover
                tournamentName={tournament.name}
                tournamentId={tournament.id}
                runningSessionId={runningSessionId}
                tournamentStatus={tournament.status}
                tournamentRoom={tournament.room}
              />
              <Button
                type="button"
                onClick={() =>
                  deleteTournament.mutate(
                    {runningSessionId: runningSessionId, tournamentId: tournament.id}
                  )}
              >
                Delete tournament
              </Button>
            </div>
            <Separator className="my-2" />
          </li>
        ))}
      </ul>
    </ScrollArea>
  )
}
