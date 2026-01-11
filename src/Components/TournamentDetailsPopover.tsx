import {
  Dialog, DialogClose,
  DialogContent,
  DialogDescription, DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/Components/ui/dialog';
import { Button } from '@/Components/ui/button';
import { TournamentDetailsList } from '@/Components/TournamentDetailsList';

export const TournamentDetailsPopover = ({ startDate, finishDate, totalBuyIns, totalResult, sessionResult, tournaments }) => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="hover:text-white"
          size="default"
          variant="outline"
        >
          <span className="text-sm">Details</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-4xl bg-neutral-800">
        <DialogHeader className="mb-0">
          <DialogTitle>Session details</DialogTitle>
          <div className="flex gap-x-8">
            <div>
              <DialogDescription>
                Session start: {startDate}
              </DialogDescription>
              <DialogDescription>
                Session end: {finishDate}
              </DialogDescription>
            </div>
            <div>
              <DialogDescription>
                Total buy-in: {totalBuyIns} $
              </DialogDescription>
              <DialogDescription>
                Total payouts: {totalResult} $
              </DialogDescription>
            </div>
            <div>
              <DialogDescription>
                Total session result: {sessionResult} $
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1">
            Tournaments
            <TournamentDetailsList tournaments={tournaments}/>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="primary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
