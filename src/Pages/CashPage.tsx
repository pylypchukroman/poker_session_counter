import { Header } from '@/Components/Header';
import { useCashSessions } from '@/Hooks/useCashSessions';
import { CashSessionsList } from '@/Components/CashSessionsList';
import { AddNewSession } from '@/Components/AddNewSession';
import { FinishNewSession } from '@/Components/FinishNewSession';

export const CashPage = () => {
  const { data: cashSession, isLoading } = useCashSessions();
  const reversedCashSessions = cashSession?.slice().reverse();
  const isSessionRunning = reversedCashSessions?.some(session => session.status === "running");

  return (
    <>
      <Header />
      <div className="bg-black w-screen h-lvh">
        <CashSessionsList cashSession={reversedCashSessions}/>
        {isSessionRunning ? <FinishNewSession /> : <AddNewSession />}
      </div>
    </>
  )
}
