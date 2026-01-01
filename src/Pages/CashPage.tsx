import { Header } from '@/Components/Header';
import { useCashSessions } from '@/Hooks/useCashSessions';
import { CashSessionsList } from '@/Components/CashSessionsList';

export const CashPage = () => {
  const { data: cashSession, isLoading } = useCashSessions();

  return (
    <>
      <Header />
      <div className="bg-black w-screen h-lvh">
        <CashSessionsList cashSession={cashSession}/>
      </div>
    </>
  )
}
