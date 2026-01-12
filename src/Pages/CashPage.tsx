import { Header } from '@/Components/Header';
import { CashSessionsList } from '@/Components/CashSessionsList';
import { AddNewSession } from '@/Components/AddNewSession';
import { FinishNewSession } from '@/Components/FinishNewSession';
import { useCashSessionData } from '@/Hooks/useCashSessionData';

export const CashPage = () => {
  const { reversedCashSessions, isSessionRunning } = useCashSessionData();

  return (
    <div className="flex flex-col gap-y-4">
      <CashSessionsList cashSession={reversedCashSessions} />
      {isSessionRunning ? <FinishNewSession /> : <AddNewSession />}
    </div>
  );
};
