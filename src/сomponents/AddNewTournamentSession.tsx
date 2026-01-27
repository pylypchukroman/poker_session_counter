import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/сomponents/ui/drawer';
import { useAddTournamentSession } from '@/Hooks/useTournamentSessionsMutations';
import { useBalanceData } from '@/Hooks/useBalanceData';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import { toast } from 'sonner';
import { Spinner } from '@/сomponents/ui/spinner';

export const AddNewTournamentSession = () => {
  const { roomsBalance, totalBalance, isZeroBalance } = useBalanceData();
  const addTournamentSession = useAddTournamentSession();
  const { accessToken } = useAuth();
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
          Start new tournament session
        </DrawerTrigger>
        <DrawerContent className="h-[34vh] md:h-[38vh] max-w-7xl mx-auto bg-neutral-800 rounded-md p-6 flex flex-col justify-between">
          <DrawerHeader className="flex flex-col gap-4">
            <DrawerTitle className="text-white text-sm md:text-lg">Start new tournament session</DrawerTitle>
            <DrawerDescription className="text-neutral-300 text-xs md:text-sm">Your total balance from every rooms: {totalBalance} $</DrawerDescription>
            <ul className="flex flex-wrap mx-auto gap-6">
              {roomsBalance?.map((room) => (
                <li key={room.id} className="flex items-center gap-2">
                  <DrawerDescription className="text-white=900 text-xs md:text-sm">{room.name} {room.balance} $</DrawerDescription>
                </li>
              ))}
            </ul>
          </DrawerHeader>
          <DrawerFooter className="flex items-center justify-center">
            <DrawerClose
              className="h-1/2 w-1/2 !text-sm !px-2 !py-1 md:!text-base md:!px-4 md:!py-2 flex flex-row justify-center items-center"
              onClick={() => addTournamentSession.mutate(accessToken)}
            >
              Start new tournament session
              {addTournamentSession.isPending ? <Spinner className="md:size-6 size-4 ml-6 " /> : null}
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
