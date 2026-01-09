import { ScrollArea } from '@/Components/ui/scroll-area';
import { Separator } from '@/Components/ui/separator';

export const TournamentDetailsList = ({ tournaments }) => {
  return (
    <ScrollArea className="h-44 w-full">
      <ul>
        {tournaments.map((tournament) => (
          <li key={tournament.id}>
            <div className="text-sm flex gap-4">
             <p>Room: {tournament.room}</p>
             <p>Name: {tournament.name}</p>
             <p>Buy-In: {tournament.buyIn}</p>
             <p>Pay out: {tournament.result}</p>
             <p>Result: {tournament.result - tournament.buyIn}</p>
            </div>
            <Separator className="my-2" />
          </li>
        ))}
      </ul>
    </ScrollArea>
  )
}
