import { ScrollArea } from '@/Components/ui/scroll-area';
import { Separator } from '@/Components/ui/separator';
import { useTournamentData } from '@/Hooks/useTournamentData';
import { FinishTournamentPopover } from '@/Components/FinishTournamentPopover';
import type { AddNewTournamentToSessionProps } from '@/types/propTypes';

export const SessionTournaments = ({ runningSessionId }: AddNewTournamentToSessionProps) => {
  const { reversedTournamentSessions } = useTournamentData(runningSessionId);

  return (
    <li>
      <div className="sticky top-0 left-0">
        <div className="grid grid-cols-7 gap-2 text-xs h-8 items-center px-2 text-xs md:text-sm">
          <p>Status</p>
          <p>Room</p>
          <p>Name</p>
          <p>Buy-In</p>
          <p>Pay out</p>
          <p>Result</p>
          <p></p>
        </div>
      </div>
      <ScrollArea className="h-66 w-full">
        <ul>
          {reversedTournamentSessions?.map((tournament) => (
            <li key={tournament.id}>
              <div className="grid grid-cols-7 gap-2 text-sm items-center px-2 text-xs md:text-sm">
                <p className="truncate">{tournament.status}</p>
                <p className="truncate">{tournament.room}</p>
                <p className="truncate">{tournament.name}</p>
                <p className="truncate">{tournament.buyIn} $</p>
                <p className="truncate">{tournament.result} $</p>
                <p className="truncate">{tournament.result - tournament.buyIn} $</p>
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
