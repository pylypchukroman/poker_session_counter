import { ScrollArea } from '@/Components/ui/scroll-area';
import { CashSessionItem } from '@/Components/CashSessionItem';

export const CashSessionsList = ({ cashSession }) => {

  return (
    <>
      <h4 className="mb-4 text-sm font-medium leading-none">Cash Sessions</h4>
      <ScrollArea className="h-[65vh] w-full rounded-md bg-neutral-800 pt-4 pb-4">
        <div className="p-4">
          <ul>
            {cashSession?.map((session) => (
              <CashSessionItem key={session.id} session={session}/>
            ))}
          </ul>
        </div>
      </ScrollArea>
    </>
  );
};
