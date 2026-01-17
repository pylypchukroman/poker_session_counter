import { ScrollArea } from '@/Components/ui/scroll-area';
import { Separator } from '@/Components/ui/separator';
import { FinishTournamentPopover } from '@/Components/FinishTournamentPopover';
import { Button } from '@/Components/ui/button';
import { useDeleteTournament } from '@/Hooks/useTournamentsMutation';
import { useTournamentData } from '@/Hooks/useTournamentData';
import { useAuth } from '@/context/AuthContext';

export const SessionTournaments = ({ runningSessionId }) => {
  const { reversedTournamentSessions } = useTournamentData(runningSessionId);
  const deleteTournament = useDeleteTournament();
  const { accessToken } = useAuth();

  return (
    <li>
    <div className="text-xs flex items-center sticky top-0 left-0 h-8">
      <p className="w-27">Status</p>
      <p className="w-32">Room</p>
      <p className="w-82">Name</p>
      <p className="w-26">Buy-In</p>
      <p className="w-26">Pay out</p>
      <p className="w-26">Result</p>
    </div>
    <ScrollArea className="h-66 w-full">
      <ul>
        {reversedTournamentSessions?.map((tournament) => (
          <li key={tournament.id}>
            <div className="text-sm flex items-center">
              <p className="w-27">{tournament.status}</p>
              <p className="w-32">{tournament.room}</p>
              <p className="w-82">{tournament.name}</p>
              <p className="w-26">{tournament.buyIn} $</p>
              <p className="w-26">{tournament.result} $</p>
              <p className="w-26">{tournament.result - tournament.buyIn} $</p>
              <FinishTournamentPopover
                tournamentName={tournament.name}
                tournamentId={tournament.id}
                runningSessionId={runningSessionId}
                tournamentStatus={tournament.status}
                tournamentRoom={tournament.room}
              />
              <Button
                type="button"
                className="ml-6"
                onClick={() =>
                  deleteTournament.mutate(
                    {
                      runningSessionId: runningSessionId,
                      tournamentId: tournament.id,
                      token:accessToken
                    }
                  )}
              >
                Delete tournament
              </Button>
            </div>
            <Separator className="my-2 bg-neutral-600" />
          </li>
        ))}
      </ul>
    </ScrollArea>
    </li>
  );
};
