import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import { useEditBalance } from '@/Hooks/useBalanceMutations';
import { useAuth } from '@/context/AuthContext';
import type { PokerRoomProps } from '@/types';

export const RoomBalancePopover = ({ roomBalance }: PokerRoomProps ) => {
  const [balance, setBalance] = useState(roomBalance.balance);
  const editBalance = useEditBalance();
  const { accessToken } = useAuth();
  const body = {
    name: roomBalance.name,
    balance: balance
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="hover:text-amber-50"
        >
          Change
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-black">
        <DialogHeader>
          <DialogTitle>
            { roomBalance.name }
          </DialogTitle>
          <DialogDescription>
            Change your room balance
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Input
              id="link"
              defaultValue={roomBalance.balance}
              onChange={(e) =>setBalance(Number(e.target.value))}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="primary"
              onClick={() => editBalance.mutate({id: roomBalance.id, body: body, token: accessToken})}
            >
              Confirm
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
