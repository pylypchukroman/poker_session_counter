import { ScrollArea } from '@/Components/ui/scroll-area';
import { TournamentSessionItem } from '@/Components/TournamentSessionItem';

export const TournamentSessionsList = ({tournamentSessions}) => {

  return (
    <ScrollArea className="h-1/2 w-full rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tournament Sessions</h4>
        <ul>
          {tournamentSessions?.map((session) => (
            <TournamentSessionItem key={session.id} session={session}/>
          ))}
        </ul>
      </div>
    </ScrollArea>
  );
};
