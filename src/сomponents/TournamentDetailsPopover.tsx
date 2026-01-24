import {
  Dialog, DialogClose,
  DialogContent, DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/сomponents/ui/dialog';
import { Button } from '@/сomponents/ui/button';
import { TournamentDetailsList } from '@/сomponents/TournamentDetailsList';
import { InfoBlock } from '@/сomponents/InfoBlock';
import type { TournamentDetailsPopoverProps } from '@/types';

export const TournamentDetailsPopover = ({ startDate, finishDate, totalBuyIns, totalResult, sessionResult, tournaments }: TournamentDetailsPopoverProps) => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="hover:text-amber-50 !text-sm !px-2 !py-1 md:!text-base md:!px-4 md:!py-2"
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
          className="grid gap-4 grid-cols-1 grid-cols-2 lg:grid-cols-3 mt-2"
        >
          <InfoBlock label="Session start" value={startDate} />
          <InfoBlock label="Total buy-in" value={`${totalBuyIns} $`} />
          <InfoBlock
            label="Session result"
            value={`${sessionResult} $`}
            valueClass={sessionResult.toString()}
          />
          <InfoBlock label="Session end" value={finishDate ? finishDate : 'running'} />
          <InfoBlock
            label="Total payouts"
            value={`${totalResult} $`}
            valueClass={totalResult.toString()}
          />
        </div>
        <div className="mt-6">
          <h4 className="mb-2 text-sm font-medium">Tournaments</h4>
          <TournamentDetailsList tournaments={tournaments} />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="primary"
            >Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
