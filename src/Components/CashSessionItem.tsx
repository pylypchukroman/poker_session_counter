import { Separator } from '@/Components/ui/separator';
import { Button } from '@/Components/ui/button';
import { useDeleteCashSession } from '@/Hooks/useCashSessionMutations';
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

export const CashSessionItem = ({session}) => {
  const deleteSession = useDeleteCashSession()

  const startSessionBalance: sessionBalance = session.balancesStart
    .reduce((sum, { balance }) => sum + balance, 0);
  const endSessionBalance: sessionBalance = session.balancesEnd
    .reduce((sum, { balance }) => sum + balance, 0);
  const sessionResult: number = startSessionBalance - endSessionBalance;

  return (
    <div>
      <li className="text-sm flex gap-20 items-center justify-between">
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
  )
};
