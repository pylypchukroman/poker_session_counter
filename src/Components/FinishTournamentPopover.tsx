import {
  Dialog, DialogClose,
  DialogContent,
  DialogDescription, DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/Components/ui/dialog';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { useState } from 'react';
import { useFinishTournament } from '@/Hooks/useTournamentsMutation';
import { useEditBalance } from '@/Hooks/useBalanceMutations';
import { useBalanceData } from '@/Hooks/useBalanceData';

export const FinishTournamentPopover = ({ tournamentName, tournamentId, runningSessionId, tournamentStatus, tournamentRoom  }) => {
  const [result, setResult] = useState<number | null>(null);
  const finishTournament = useFinishTournament();
  const editBalance = useEditBalance();
  const { currentRoomBalance } = useBalanceData(tournamentRoom);

  const onClick = () => {
    //balance logic
    const newBalance = currentRoomBalance.balance + result;
    const body = {
      name: currentRoomBalance.name,
      balance: newBalance
    }
    editBalance.mutate({id: currentRoomBalance.id, body: body});
    //balance logic
    //tournament logic
    finishTournament.mutate({runningSessionId, tournamentId, result})
    //tournament logic
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={tournamentStatus !== "running"}
          className="text-amber-50 hover:text-amber-50"
          size="sm"
          variant="outline"
        >
          Finish tournament
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-neutral-800">
        <DialogHeader>
          <DialogTitle>{tournamentName}</DialogTitle>
          <DialogDescription>
            Enter your tournament result
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Input
              className="text-white"
              type="number"
              min={0}
              // placeholder="0"
              value={result?.toString()}
              onChange={(e) => setResult(Number(e.target.value))}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              className="hover:text-amber-50"
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
  );
};
