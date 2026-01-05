import { ScrollArea } from '@/Components/ui/scroll-area';
import { Separator } from '@/Components/ui/separator';

export const TournamentDetailsList = ({ tournaments }) => {
  return (
    <ScrollArea className="h-44 w-full">
      <ul>
        {tournaments.map((tournament) => (
          <>
            <li key={tournament.id} className="text-sm flex gap-4">
             <p>Room: Stars!!!!!!</p>
             <p>Name: {tournament.name}</p>
             <p>Buy-In: {tournament.buyIn}</p>
             <p>Pay out: {tournament.result}</p>
             <p>Result: {tournament.result - tournament.buyIn}</p>
            </li>
            <Separator className="my-2" />
          </>
        ))}
      </ul>
    </ScrollArea>
  )
}
