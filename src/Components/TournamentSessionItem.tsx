import { formatIsoDate } from '@/helpers/formatIsoDate';
import { Button } from '@/Components/ui/button';
import { Separator } from '@/Components/ui/separator';
import { useDeleteTournamentSession } from '@/Hooks/useTournamentSessionsMutations';
import { TournamentDetailsPopover } from '@/Components/TournamentDetailsPopover';
import { calculateTournamentTotal } from '@/helpers/calculateTournamentTotal';
import { useTournamentSessionData } from '@/Hooks/useTournamentSessionData';

export const TournamentSessionItem = ({ session }) => {
  const deleteSession = useDeleteTournamentSession();
  const startDate = formatIsoDate(session.startedAt);
  const finishDate = formatIsoDate(session.finishedAt);
  const totalBuyIns = calculateTournamentTotal(session.tournaments, "buyIn");
  const totalResult = calculateTournamentTotal(session.tournaments, "result");
  const { isSessionRunning } = useTournamentSessionData()
  const sessionResult = isSessionRunning ? 0 : (totalResult - totalBuyIns);

  return (
    <div className='w-300'>
      <li className={sessionResult >= 0 ? 'h-20 flex items-center justify-between p-2 bg-green-900/8 rounded-md' : 'h-20 flex items-center justify-between p-2 bg-red-900/5 rounded-md'}>
        <p className='text-xs flex flex-col gap-y-2 w-18'>Start time:<span className='text-sm'>{startDate}</span></p>
        <p className='text-xs flex flex-col gap-y-2 w-18'>Finish time:<span className='text-sm'>{isSessionRunning ? "running" : finishDate}</span></p>
        <p className='text-xs flex flex-col gap-y-2 w-13'>Status:<span className='text-sm'>{session.status}</span></p>
        <p className='text-xs flex flex-col gap-y-2 w-32'>Total buy-ins:<span className='text-sm'>{totalBuyIns} $</span></p>
        <p className='text-xs flex flex-col gap-y-2 w-30'>Total payouts:<span className={totalResult >= 0 ? 'text-sm text-green-600' : 'text-sm text-red-600'}>{totalResult} $</span></p>
        <p className='text-xs flex flex-col gap-y-2 w-30'>Session result:<span className={sessionResult >= 0 ? 'text-sm text-green-600' : 'text-sm text-red-600'}>{sessionResult} $</span></p>
        <TournamentDetailsPopover
          startDate={startDate}
          finishDate={finishDate}
          totalBuyIns={totalBuyIns}
          totalResult={totalResult}
          sessionResult={sessionResult}
          tournaments={session.tournaments}
        />
        <Button
          className="hover:text-white"
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
