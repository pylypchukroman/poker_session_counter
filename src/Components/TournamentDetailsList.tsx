import { ScrollArea } from '@/Components/ui/scroll-area';
import { Separator } from '@/Components/ui/separator';

export const TournamentDetailsList = ({ tournaments }) => {

  return (
    <ScrollArea className="h-[22rem] w-full">
      <div className="sticky top-0 z-10 bg-neutral-800">
        <div className="grid grid-cols-[1.5fr_2.5fr_1fr_1fr_1fr] items-center h-8 px-2 text-sm font-medium"
        >
          <span>Room</span>
          <span>Name</span>
          <span>Buy-In</span>
          <span>Pay out</span>
          <span>Result</span>
        </div>
        <Separator className="bg-neutral-700" />
      </div>
      <div className="max-h-[calc(22rem-2rem)] overflow-y-auto">
        <ul className="pt-1">
          {tournaments.map((tournament) => {
            const result = tournament.result - tournament.buyIn;

            return (
              <li key={tournament.id}>
                <div className="grid grid-cols-[1.5fr_2.5fr_1fr_1fr_1fr] items-center px-2 py-2 text-sm">
                  <span className="truncate">{tournament.room}</span>
                  <span className="truncate">{tournament.name}</span>
                  <span>{tournament.buyIn} $</span>
                  <span>{tournament.result} $</span>
                  <span
                    className={result}
                  >
                {result} $
              </span>
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
