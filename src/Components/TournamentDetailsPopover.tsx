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
        <Button variant="outline">Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl h-1/2 bg-black">
        <DialogHeader>
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
                Total buy-in: {totalBuyIns}
              </DialogDescription>
              <DialogDescription>
                Total payouts: {totalResult}
              </DialogDescription>
            </div>
            <div>
              <DialogDescription>
                Total session result: {sessionResult}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
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
