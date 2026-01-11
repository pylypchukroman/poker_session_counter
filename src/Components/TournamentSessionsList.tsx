import { ScrollArea } from '@/Components/ui/scroll-area';
import { TournamentSessionItem } from '@/Components/TournamentSessionItem';

export const TournamentSessionsList = ({ tournamentSessions }) => {

  return (
    <>
      <h4 className="mb-4 text-sm font-medium leading-none">Tournament Sessions</h4>
      <ScrollArea className="h-[65vh] w-full rounded-md bg-neutral-800 pt-4 pb-4">
        <ul className="p-4">
          {tournamentSessions?.map((session) => (
            <TournamentSessionItem key={session.id} session={session}/>
          ))}
        </ul>
      </ScrollArea>
    </>
  );
};
