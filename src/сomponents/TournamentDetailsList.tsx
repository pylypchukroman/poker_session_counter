import { ScrollArea } from '@/сomponents/ui/scroll-area';
import { Separator } from '@/сomponents/ui/separator';
import type { TournamentDetailsListProps } from '@/types';


export const TournamentDetailsList = ({ tournaments }: TournamentDetailsListProps) => {

  const reversedTournaments = tournaments.slice().reverse();

  return (
    <ScrollArea className="h-[22rem] w-full">
      <div className="sticky top-0 z-10 bg-neutral-800">
        <div className="grid grid-cols-[1.5fr_2.5fr_1fr_1fr_1fr] items-center h-8 px-2 text-sm font-medium"
        >
          <span className="text-xs md:text-sm">Room</span>
          <span className="text-xs md:text-sm">Name</span>
          <span className="text-xs md:text-sm">Buy-In</span>
          <span className="text-xs md:text-sm">Pay out</span>
          <span className="text-xs md:text-sm">Result</span>
        </div>
        <Separator className="bg-neutral-700" />
      </div>
      <div className="max-h-[calc(22rem-2rem)] overflow-y-auto">
        <ul className="pt-1">
          {reversedTournaments.map((tournament) => {
            const result = tournament.result - tournament.buyIn;

            return (
              <li key={tournament.id}>
                <div className="grid grid-cols-[1.5fr_2.5fr_1fr_1fr_1fr] items-center px-2 py-2 text-sm">
                  <span className="truncate text-[11px] md:text-sm">{tournament.room}</span>
                  <span className="truncate text-[11px] md:text-sm">{tournament.name}</span>
                  <span className="text-[11px] md:text-sm">{tournament.buyIn} $</span>
                  <span className="text-[11px] md:text-sm">{tournament.result} $</span>
                  <span className="text-[11px] md:text-sm">{result} $</span>
                </div>

                <Separator className="bg-neutral-700" />
              </li>
            );
          })}
        </ul>
      </div>
    </ScrollArea>
  );
};
