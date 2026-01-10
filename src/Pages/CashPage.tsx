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
      <div className="bg-black w-screen h-lvh">
        <CashSessionsList cashSession={reversedCashSessions}/>
        {isSessionRunning ? <FinishNewSession /> : <AddNewSession />}
      </div>
    </>
  );
};
