import {
  Dialog, DialogClose,
  DialogContent,
  DialogDescription, DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/Components/ui/dialog';
import { Button } from '@/Components/ui/button';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { useState } from 'react';
import { useFinishTournament } from '@/Hooks/useTournamentsMutation';

export const FinishTournamentPopover = ({ tournamentName, tournamentId, runningSessionId, tournamentStatus  }) => {
  const [result, setResult] = useState(0);
  const finishTournament = useFinishTournament();

  const onClick = () => {
    finishTournament.mutate({runningSessionId, tournamentId, result})
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={tournamentStatus !== "running"}
          className="text-amber-50"
          size="sm"
          variant="outline"
        >
          Finish tournament
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Enter result for {tournamentName}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="result" className="sr-only">
              Link
            </Label>
            <Input
              className="text-black"
              type="number"
              id="result"
              placeholder="0"
              value={result}
              onChange={(e) => setResult(Number(e.target.value))}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              onClick={onClick}
            >
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
