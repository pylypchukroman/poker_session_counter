import { Separator } from '@/Components/ui/separator';
import { formatIsoDate } from '@/helpers/formatIsoDate';
import { useDeleteCashSession } from '@/Hooks/useCashSessionMutations';
import { Button } from '@/Components/ui/button';
import { getBalancesSum } from '@/helpers/getBalancesSum';
import { useCashSessionData } from '@/Hooks/useCashSessionData';
type balance = {
  room: string,
  balance: number
}

type sessionBalance = {
  id: string,
  startedAt: Date,
  finishedAt: Date,
  status: string,
  balancesStart: [balance],
  balancesEnd: [balance]
}

export const CashSessionItem = ({ session }) => {
  const { isSessionRunning } = useCashSessionData();
  const deleteSession = useDeleteCashSession();
  const startDate = formatIsoDate(session.startedAt);
  const finishDate = formatIsoDate(session.finishedAt);
  const startSessionBalance: sessionBalance = getBalancesSum(session.balancesStart);
  const endSessionBalance: sessionBalance = getBalancesSum(session.balancesEnd);
  const sessionResult: sessionBalance | number = isSessionRunning ? 0 : (endSessionBalance - startSessionBalance);

  return (
    <div className='w-300'>
      <li className={sessionResult >= 0 ? 'h-20 flex items-center justify-between p-2 bg-green-900/8 rounded-md' : 'h-20 flex items-center justify-between p-2 bg-red-900/5 rounded-md'}>
        <p className='text-xs flex flex-col gap-y-2 w-18'>Start time:<span className='text-sm'>{startDate}</span></p>
        <p className='text-xs flex flex-col gap-y-2 w-18'>Finish time:<span className='text-sm'>{isSessionRunning ? "running" : finishDate}</span></p>
        <p className='text-xs flex flex-col gap-y-2 w-13'>Status:<span className='text-sm'>{session.status}</span></p>
        <p className='text-xs flex flex-col gap-y-2 w-32'>Start session balance:<span className='text-sm'>{startSessionBalance}</span></p>
        <p className='text-xs flex flex-col gap-y-2 w-30'>End session balance:<span className='text-sm'>{endSessionBalance}</span></p>
        <p className='text-xs flex flex-col gap-y-2 w-30'>Session result:<span className={sessionResult >= 0 ? 'text-sm text-green-600' : 'text-sm text-red-600'}>{sessionResult}</span></p>
        <Button
          size="default"
          variant="outline"
          onClick={() => deleteSession.mutate(session.id)}
        >
          <span className="text-sm">Delete session</span>
        </Button>
      </li>
      <Separator className="my-2 bg-neutral-600" />
    </div>
  );
};
