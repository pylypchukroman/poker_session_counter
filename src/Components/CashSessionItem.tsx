import { Separator } from '@/Components/ui/separator';
import { formatIsoDate } from '@/helpers/formatIsoDate';
import { useDeleteCashSession } from '@/Hooks/useCashSessionMutations';
import { Button } from '@/Components/ui/button';
import { getBalancesSum } from '@/helpers/getBalancesSum';
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
  const deleteSession = useDeleteCashSession();
  const startDate = formatIsoDate(session.startedAt);
  const finishDate = formatIsoDate(session.finishedAt);
  const startSessionBalance: sessionBalance = getBalancesSum(session.balancesStart);
  const endSessionBalance: sessionBalance = getBalancesSum(session.balancesEnd);
  const sessionResult: sessionBalance | number = session.status === "running" ? 0 : (endSessionBalance - startSessionBalance);

  return (
    <div>
      <li className="text-sm flex gap-20 items-center justify-between">
        <p>Start time: {startDate}</p>
        <p>Finish time: {finishDate}</p>
        <p>Status: {session.status}</p>
        <p>Start session total balance: {startSessionBalance}</p>
        <p>End session total balance: {endSessionBalance}</p>
        <p>Total Session result: {sessionResult}</p>
        <Button
          variant="outline"
          onClick={() => deleteSession.mutate(session.id)}
        >
          Delete session
        </Button>
      </li>
      <Separator className="my-2" />
    </div>
  );
};
