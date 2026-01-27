import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/сomponents/ui/sheet"
import { Button } from '@/сomponents/ui/button';
import { PokerRoom } from '@/сomponents/PokerRoom';
import { AddBalancePopover } from '@/сomponents/addBalancePopover';
import { useBalanceData } from '@/Hooks/useBalanceData';

export const Balance = () => {
  const { roomsBalance, totalBalance, isLoading } = useBalanceData();
  console.log(isLoading)

  if (!roomsBalance) return;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="!text-sm !px-2 !py-1 md:!text-base md:!px-4 md:!py-2"
          variant="default"
        >
          Balance: {totalBalance} $
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-neutral-800 max-w-7xl mx-auto items-center" side="top">
        <SheetHeader>
          <SheetTitle className="mt-14 text-white text-center">
            Your total balance is: {totalBalance} $
          </SheetTitle>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
            <ul className="flex flex-col items-center justify-center">
              {roomsBalance.map((roomBalance) => (
                <li
                  key={roomBalance.id}
                  className="mt-4"
                >
                  <PokerRoom roomBalance={roomBalance} />
                </li>
              ))}
            </ul>
        </div>
        <SheetFooter>
          <AddBalancePopover />
          <SheetClose asChild>
            <Button variant="outline" className="hover:text-amber-50 w-xl">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
