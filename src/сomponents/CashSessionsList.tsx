import { ScrollArea } from '@/сomponents/ui/scroll-area';
import { CashSessionItem } from '@/сomponents/CashSessionItem';
import type { CashSessionsListProps } from '@/types';
import { Loader } from '@/сomponents/Loader';

export const CashSessionsList = ({ cashSession, isLoading }: CashSessionsListProps) => {

  return (
    <section className="max-w-full overflow-x-hidden">
      <h4 className="mb-4 mt-4 text-xs md:text-sm font-medium leading-none">
        Cash Sessions
      </h4>
      {isLoading ?
        <Loader />
        :
        (<ScrollArea className="h-[65vh] w-full max-w-full rounded-md bg-neutral-800 py-4 overflow-x-hidden">
          <ul className="p-4 space-y-2">
            {cashSession?.map((session) => (
              <CashSessionItem
                key={session.id}
                session={session}
              />
          ))}
          </ul>
        </ScrollArea>
      )}
    </section>
  );
};
