import { Button } from "@/components/ui/button"
import {
  Dialog, DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from 'react';
import { useAddBalance } from '@/Hooks/useBalanceMutations';
import { useAuth } from '@/context/AuthContext';
import type { RoomBalance } from '@/types';
import { initState } from '@/assets/initBalanceState';
import { getBalanceBody } from '@/helpers/getBalanceBody';


export const AddBalancePopover = () => {
  const { accessToken } = useAuth();
  const addBalance = useAddBalance();
  const [newBalance, setNewBalance] = useState<RoomBalance>(initState);

  const reset = () => {
    setNewBalance(initState)
  };

  const onSubmit = () => {
    const newBalanceBody = getBalanceBody(newBalance.name, Number(newBalance.balance));
    addBalance.mutate({body: newBalanceBody, token: accessToken});
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="hover:text-amber-50">Add Room Balance</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-neutral-800">
        <DialogHeader>
          <DialogTitle>Add room balance</DialogTitle>
          <DialogDescription>
            Enter name and balance for new poker room.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={newBalance.name}
              onChange={(e) => setNewBalance(prev => ({ ...prev, name: e.target.value }))}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Balance
            </Label>
            <Input
              id="balance"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={newBalance.balance}
              onChange={(e) => {
                const value = e.target.value;

                if (/^\d*$/.test(value)) {
                  setNewBalance(prev => ({
                    ...prev,
                    balance: value,
                  }));
                }
              }}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="submit"
              onClick={onSubmit}
            >Add</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
