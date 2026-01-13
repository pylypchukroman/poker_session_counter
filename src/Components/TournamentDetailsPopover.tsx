import {
  Dialog, DialogClose,
  DialogContent, DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/Components/ui/dialog';
import { Button } from '@/Components/ui/button';
import { TournamentDetailsList } from '@/Components/TournamentDetailsList';
import { InfoBlock } from '@/Components/InfoBlock';

export const TournamentDetailsPopover = ({ startDate, finishDate, totalBuyIns, totalResult, sessionResult, tournaments }) => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="hover:text-amber-50"
          size="sm"
          variant="outline"
        >
          Details
        </Button>
      </DialogTrigger>

      <DialogContent className="w-full max-w-lg sm:max-w-2xl lg:max-w-4xl bg-neutral-800">
        <DialogHeader>
          <DialogTitle>Session details</DialogTitle>
        </DialogHeader>
        <div
          className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2"
        >
          <InfoBlock label="Session start" value={startDate} />
          <InfoBlock label="Total buy-in" value={`${totalBuyIns} $`} />
          <InfoBlock
            label="Session result"
            value={`${sessionResult} $`}
            valueClass={sessionResult}
          />
          <InfoBlock label="Session end" value={finishDate ? finishDate : 'running'} />
          <InfoBlock
            label="Total payouts"
            value={`${totalResult} $`}
            valueClass={totalResult}
          />
        </div>
        <div className="mt-6">
          <h4 className="mb-2 text-sm font-medium">Tournaments</h4>
          <TournamentDetailsList tournaments={tournaments} />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="primary">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
