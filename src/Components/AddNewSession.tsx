import {
  Drawer, DrawerClose,
  DrawerContent,
  DrawerDescription, DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/Components/ui/drawer';
import { useAddCashSession } from '@/Hooks/useCashSessionMutations';
import { useBalanceData } from '@/Hooks/useBalanceData';

export const AddNewSession = () => {
  const { roomsBalance, totalBalance } = useBalanceData();
  const addCashSession = useAddCashSession();

  return (
    <Drawer>
      <DrawerTrigger className="h-[20vh] px-4 py-2 text-white rounded-md bg-neutral-800">
        Start new session
      </DrawerTrigger>

      <DrawerContent className="h-[38vh] max-w-7xl mx-auto bg-neutral-800 rounded-md p-6 flex flex-col justify-between">
        <DrawerHeader className="flex flex-col gap-4">
          <DrawerTitle className="text-white text-lg">Start new cash session</DrawerTitle>
          <DrawerDescription className="text-neutral-300">
            Your total balance from every room: {totalBalance} $
          </DrawerDescription>

          <ul className="flex flex-wrap mx-auto gap-6 mt-4">
            {roomsBalance?.map((room) => (
              <li key={room.id} className="flex items-center gap-2">
                <DrawerDescription className="text-neutral-300">
                  {room.name}: {room.balance} $
                </DrawerDescription>
              </li>
            ))}
          </ul>
        </DrawerHeader>

        <DrawerFooter className="flex items-center justify-center">
          <DrawerClose
            className="h-1/2 w-1/2"
            onClick={() => addCashSession.mutate(roomsBalance)}
          >
            Start new cash session
          </DrawerClose>

          <DrawerClose className="w-1/2 h-1/3 flex items-center justify-center">
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

