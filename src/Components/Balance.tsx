import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/Components/ui/button';
import { PokerRoom } from '@/Components/PokerRoom';
import { useEffect, useState } from 'react';
import { getBalances } from '@/api/balanceApi';


export const Balance = () => {
  // const balance: number = useSelector((state: RootState) => selectBalance(state));
  const [roomsBalance, setRoomsBalance] = useState(null);
  const totalBalance = roomsBalance?.map(roomBalance => Number(roomBalance.balance)).reduce((acc, x) => acc += x);

  useEffect(() => {
    getBalances(setRoomsBalance);
  }, []);

  if (!roomsBalance) return;

  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="default">Total Balance: {totalBalance}</Button>
      </SheetTrigger>
      <SheetContent className="bg-black text-white">
        <SheetHeader>
          <SheetTitle className="mt-14 mb-10 text-white">
            Your total balance is: {totalBalance} USD
          </SheetTitle>
          <SheetDescription>
            Balance pour room
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <ul>
              {roomsBalance.map((roomBalance) => (
                <li
                  key={roomBalance.id}
                  className="mt-6"
                >
                  <PokerRoom roomBalance={roomBalance} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SheetFooter>
            <Button type="button">Add room balance</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
