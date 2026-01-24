import { CashSessionsList } from '@/сomponents/CashSessionsList';
import { AddNewSession } from '@/сomponents/AddNewSession';
import { FinishNewSession } from '@/сomponents/FinishNewSession';
import { useCashSessionData } from '@/Hooks/useCashSessionData';

export const  CashPage = () => {
  const { reversedCashSessions, isSessionRunning, isLoading } = useCashSessionData();

  return (
    <div className="flex flex-col gap-y-4">
      <CashSessionsList cashSession={reversedCashSessions} />
      {isSessionRunning ? <FinishNewSession /> : <AddNewSession />}
    </div>
  );
};
