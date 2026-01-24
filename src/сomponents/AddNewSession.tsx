import {
  Drawer, DrawerClose,
  DrawerContent,
  DrawerDescription, DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/сomponents/ui/drawer';
import { useAddCashSession } from '@/Hooks/useCashSessionMutations';
import { useBalanceData } from '@/Hooks/useBalanceData';
import { toast } from 'sonner';
import { useState } from 'react';

export const AddNewSession = () => {
  const { roomsBalance, totalBalance, isZeroBalance } = useBalanceData();
  const addCashSession = useAddCashSession();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    if (isZeroBalance) {
      toast.info("Add balance to start a new session");
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <Drawer open={isOpen}>
      <DrawerTrigger
        onClick={onClick}
        className="h-[12vh] md:h-[18vh] px-4 py-2 text-white rounded-md bg-neutral-800"
        style={{
          opacity: isZeroBalance ? 0.5 : 1,
          cursor: isZeroBalance ? "not-allowed" : "pointer",
        }}
      >
       Start new session
      </DrawerTrigger>

      <DrawerContent className="h-[34vh] md:h-[38vh] max-w-7xl mx-auto bg-neutral-800 rounded-md flex flex-col justify-between">
        <DrawerHeader className="flex flex-col gap-4">
          <DrawerTitle className="text-white text-sm md:text-lg">Start new cash session</DrawerTitle>
          <DrawerDescription className="text-neutral-300 text-xs md:text-sm">
            Your total balance from every room: {totalBalance} $
          </DrawerDescription>

          <ul className="flex flex-wrap mx-auto gap-6 md:mt-4">
            {roomsBalance?.map((room) => (
              <li key={room.id} className="flex items-center gap-2">
                <DrawerDescription className="text-neutral-300 text-xs md:text-sm">
                  {room.name}: {room.balance} $
                </DrawerDescription>
              </li>
            ))}
          </ul>
        </DrawerHeader>

        <DrawerFooter className="flex items-center justify-center">
          <DrawerClose
            className="h-1/2 w-1/2 !text-sm !px-2 !py-1 md:!text-base md:!px-4 md:!py-2"
            onClick={() => addCashSession.mutate({ body: roomsBalance })}
          >
            Start new cash session
          </DrawerClose>

          <DrawerClose
            onClick={() => setIsOpen(false)}
            className="w-1/2 h-1/3 flex items-center justify-center !text-sm !px-2 !py-1 md:!text-base md:!px-4 md:!py-2"
          >
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

