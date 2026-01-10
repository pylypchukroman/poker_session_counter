import { Header } from '@/Components/Header';
import { CashSessionsList } from '@/Components/CashSessionsList';
import { AddNewSession } from '@/Components/AddNewSession';
import { FinishNewSession } from '@/Components/FinishNewSession';
import { useCashSessionData } from '@/Hooks/useCashSessionData';

export const CashPage = () => {
  const { reversedCashSessions, isSessionRunning } = useCashSessionData();

  return (
    <>
      <Header />
      <div className="min-w-7xl flex items-center justify-between flex-col gap-y-4 bg-black p-4">
        <div className="bg-black max-w-7xl h-lvh">
          <CashSessionsList cashSession={reversedCashSessions}/>
          {isSessionRunning ? <FinishNewSession /> : <AddNewSession />}
        </div>
      </div>
    </>
  );
};
