import { formatIsoDate } from '@/helpers/formatIsoDate';
import { Button } from '@/Components/ui/button';
import { Separator } from '@/Components/ui/separator';
import { useDeleteTournamentSession } from '@/Hooks/useTournamentSessionsMutations';
import { TournamentDetailsPopover } from '@/Components/TournamentDetailsPopover';
import { calculateTournamentTotal } from '@/helpers/calculateTournamentTotal';
import { useTournamentSessionData } from '@/Hooks/useTournamentSessionData';
import { InfoBlock } from '@/Components/InfoBlock';

export const TournamentSessionItem = ({ session }) => {
  const deleteSession = useDeleteTournamentSession();
  const startDate = formatIsoDate(session.startedAt);
  const finishDate = formatIsoDate(session.finishedAt);
  const totalBuyIns = calculateTournamentTotal(session.tournaments, "buyIn");
  const totalResult = calculateTournamentTotal(session.tournaments, "result");
  const { isSessionRunning } = useTournamentSessionData()
  const sessionResult = isSessionRunning ? 0 : (totalResult - totalBuyIns);

  return (
    <>
      <li
        className={`
        grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_auto_auto]
        items-center gap-4
        p-3 rounded-md
        min-w-0 w-full
        h-24
        ${sessionResult >= 0 ? "bg-green-900/8" : "bg-red-900/5"}
      `}
      >
        <InfoBlock label="Start time" value={startDate} />
        <InfoBlock
          label="Finish time"
          value={isSessionRunning ? "running" : finishDate}
        />
        <InfoBlock label="Status" value={session.status} />
        <InfoBlock
          label="Total buy-ins"
          value={`${totalBuyIns} $`}
        />
        <InfoBlock
          label="Total payouts"
          value={`${totalResult} $`}
          valueClass={totalResult >= 0 ? "text-green-600" : "text-red-600"}
        />
        <InfoBlock
          label="Session result"
          value={`${sessionResult} $`}
          valueClass={sessionResult >= 0 ? "text-green-600" : "text-red-600"}
        />
        <TournamentDetailsPopover
          startDate={startDate}
          finishDate={finishDate}
          totalBuyIns={totalBuyIns}
          totalResult={totalResult}
          sessionResult={sessionResult}
          tournaments={session.tournaments}
        />
        <Button
          size="sm"
          variant="outline"
          className="justify-self-end hover:text-white"
          onClick={() => deleteSession.mutate(session.id)}
        >
          Delete
        </Button>
      </li>
      <Separator className="my-2 bg-neutral-700" />
    </>
  );
};
