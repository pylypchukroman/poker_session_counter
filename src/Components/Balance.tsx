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
import { useSelector } from 'react-redux';
import { selectBalance } from '@/redux/balance/selectors';
import { store } from '@/redux/store';
import { Button } from '@/Components/ui/button';
import { pokerRooms } from '@/data/rooms';
import { PokerRoom } from '@/Components/PokerRoom';
export type RootState = ReturnType<typeof store.getState>


export const Balance = () => {
  const balance: number = useSelector((state: RootState) => selectBalance(state));

  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="default">Total Balance: {balance}</Button>
      </SheetTrigger>
      <SheetContent className="bg-black text-white">
        <SheetHeader>
          <SheetTitle className="mt-14 mb-10 text-white">
            Your total balance is: {balance} USD
          </SheetTitle>
          <SheetDescription>
            Balance pour room
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <ul>
              {pokerRooms.map((room) => (
                <li
                  key={room.id}
                  className="mt-6"
                >
                  <PokerRoom roomData={room}>
                  </PokerRoom>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
