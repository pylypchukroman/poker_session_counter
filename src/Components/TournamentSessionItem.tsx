import { formatIsoDate } from '@/helpers/formatIsoDate';
import { Button } from '@/Components/ui/button';
import { Separator } from '@/Components/ui/separator';
import { useDeleteTournamentSession } from '@/Hooks/useTournamentSessionsMutations';
import { TournamentDetailsPopover } from '@/Components/TournamentDetailsPopover';

export const TournamentSessionItem = ({session}) => {
  const deleteSession = useDeleteTournamentSession();
  const startDate = formatIsoDate(session.startedAt);
  const finishDate = formatIsoDate(session.finishedAt);
  const totalBuyIns = session.tournaments.reduce((sum, { buyIn })=>  sum + buyIn, 0);
  const totalResult = session.tournaments.reduce((sum, { result })=>  sum + result, 0);

  const sessionResult = session.status === "running" ? 0 : (totalResult - totalBuyIns);

  return (
    <div>
      <li className="text-sm flex gap-20 items-center justify-between">
        <p>Start time: {startDate}</p>
        <p>Finish time: {finishDate}</p>
        <p>Status: {session.status}</p>
        <p>Total buy-ins: {totalBuyIns}</p>
        <p>Total payouts: {totalResult}</p>
        <p>Total Session result: {sessionResult}</p>
        <TournamentDetailsPopover
          startDate={startDate}
          finishDate={finishDate}
          totalBuyIns={totalBuyIns}
          totalResult={totalResult}
          sessionResult={sessionResult}
          tournaments={session.tournaments}
        />
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
