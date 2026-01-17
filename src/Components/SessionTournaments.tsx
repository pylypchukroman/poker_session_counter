import { ScrollArea } from '@/Components/ui/scroll-area';
import { Separator } from '@/Components/ui/separator';
import { FinishTournamentPopover } from '@/Components/FinishTournamentPopover';
import { useTournamentData } from '@/Hooks/useTournamentData';

export const SessionTournaments = ({ runningSessionId }) => {
  const { reversedTournamentSessions } = useTournamentData(runningSessionId);

  return (
    <li>
    <div className="text-xs flex items-center sticky top-0 left-0 h-8">
      <p className="w-30">Status</p>
      <p className="w-36">Room</p>
      <p className="w-88">Name</p>
      <p className="w-28">Buy-In</p>
      <p className="w-28">Pay out</p>
      <p className="w-28">Result</p>
    </div>
    <ScrollArea className="h-66 w-full">
      <ul>
        {reversedTournamentSessions?.map((tournament) => (
          <li key={tournament.id}>
            <div className="text-sm flex items-center">
              <p className="w-30">{tournament.status}</p>
              <p className="w-36">{tournament.room}</p>
              <p className="w-88">{tournament.name}</p>
              <p className="w-28">{tournament.buyIn} $</p>
              <p className="w-28">{tournament.result} $</p>
              <p className="w-28">{tournament.result - tournament.buyIn} $</p>
              <FinishTournamentPopover
                tournamentName={tournament.name}
                tournamentId={tournament.id}
                runningSessionId={runningSessionId}
                tournamentStatus={tournament.status}
                tournamentRoom={tournament.room}
              />

            </div>
            <Separator className="my-2 bg-neutral-600" />
          </li>
        ))}
      </ul>
    </ScrollArea>
    </li>
  );
};
