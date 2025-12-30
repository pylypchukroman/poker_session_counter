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


export const AddBalancePopover = () => {
  const initState = {
    name: "",
    balance: 0
  }
  const addBalance = useAddBalance();
  const [newBalance, setNewBalance] = useState(initState);
  const reset = () => {
    setNewBalance(initState)
  }
  const onSubmit = () => {
    const newBalanceBody = {
      name: newBalance.name,
      balance: newBalance.balance
    }
    addBalance.mutate(newBalanceBody);
    reset();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Room Balance</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black">
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
              value={newBalance.balance}
              onChange={(e)=> setNewBalance(prev => ({ ...prev, balance: Number(e.target.value) }))}
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
  )
}
