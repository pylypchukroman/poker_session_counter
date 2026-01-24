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
import { getBalanceBody } from '@/helpers/getBalanceBody';
import { RoomSelect } from '@/Components/RoomSelect';


export const AddBalancePopover = () => {
  const addBalance = useAddBalance();
  const [newBalance, setNewBalance] = useState<string>("");
  const [selectedRoom, setSelectedRoom] = useState<string | undefined>(undefined);

  const reset = () => {
    setNewBalance("");
    setSelectedRoom(undefined);
  };

  const onSubmit = () => {
    if (!selectedRoom || !newBalance) return;
    const newBalanceBody = getBalanceBody(selectedRoom, Number(newBalance));
    addBalance.mutate({ body: newBalanceBody });
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
            Select room and enter balance for new poker room
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Room
            </Label>
            <RoomSelect
              selectedRoom={selectedRoom}
              setSelectedRoom={setSelectedRoom}
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
              value={newBalance}
              onChange={(e) => {
                const value = e.target.value;

                if (/^\d*$/.test(value)) {
                  setNewBalance(value);
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
