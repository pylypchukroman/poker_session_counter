import { ScrollArea } from '@/Components/ui/scroll-area';
import { TournamentSessionItem } from '@/Components/TournamentSessionItem';

export const TournamentSessionsList = ({ tournamentSessions }) => {

  return (
    <section className="max-w-full overflow-x-hidden">
      <h4 className="mb-4 mt-4 text-xs md:text-sm font-medium leading-none">Tournament Sessions</h4>
      <ScrollArea className="h-[65vh] w-full max-w-full rounded-md bg-neutral-800 py-4 overflow-x-hidden">
        <ul className="p-4 space-y-2">
          {tournamentSessions?.map((session) => (
            <TournamentSessionItem key={session.id} session={session}/>
          ))}
        </ul>
      </ScrollArea>
    </section>
  );
};
