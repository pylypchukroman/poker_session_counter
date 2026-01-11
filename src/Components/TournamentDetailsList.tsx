import { ScrollArea } from '@/Components/ui/scroll-area';
import { Separator } from '@/Components/ui/separator';

export const TournamentDetailsList = ({ tournaments }) => {

  return (
    <ScrollArea className="h-90 w-full relative">
      <div className="sticky top-0 z-10 bg-neutral-800">
        <div className="flex h-8 items-center">
          <p className="text-sm w-40">Room</p>
          <p className="text-sm w-90">Name</p>
          <p className="text-sm w-26">Buy-In</p>
          <p className="text-sm w-26">Pay out</p>
          <p className="text-sm w-28">Result</p>
        </div>
      </div>
      <ul className="pt-1">
        {tournaments.map((tournament) => (
          <li key={tournament.id}>
            <div className="text-sm flex">
             <p className="text-sm w-40">{tournament.room}</p>
             <p className="text-sm w-90">{tournament.name}</p>
             <p className="text-sm w-26">{tournament.buyIn} $</p>
             <p className="text-sm w-26">{tournament.result} $</p>
             <p className="text-sm w-28">{tournament.result - tournament.buyIn} $</p>
            </div>
            <Separator className="my-2 bg-neutral-600" />
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
};
