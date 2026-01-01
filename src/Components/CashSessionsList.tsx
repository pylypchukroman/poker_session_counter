import { ScrollArea } from '@/Components/ui/scroll-area';
import { CashSessionItem } from '@/Components/CashSessionItem';

export const CashSessionsList = ({cashSession}) => {

  return (
    <ScrollArea className="h-1/2 w-full rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Cash Sessions</h4>
        {cashSession?.map((session) => (
          <ul>
            <CashSessionItem session={session}/>
          </ul>
        ))}
      </div>
    </ScrollArea>
  )
}
