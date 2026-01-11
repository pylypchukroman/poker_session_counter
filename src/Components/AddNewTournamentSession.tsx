import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/Components/ui/drawer';
import { useAddTournamentSession } from '@/Hooks/useTournamentSessionsMutations';
import { useBalanceData } from '@/Hooks/useBalanceData';

export const AddNewTournamentSession = () => {
  const { roomsBalance, totalBalance } = useBalanceData();
  const addTournamentSession = useAddTournamentSession();

  return (
    <div className="h-[20vh] w-full rounded-md mt-8 flex items-center justify-center bg-neutral-800">
      <Drawer>
        <DrawerTrigger>Start new tournament session</DrawerTrigger>
        <DrawerContent className="h-[38vh] max-w-7xl bg-neutral-800">
          <DrawerHeader>
            <DrawerTitle className="text-white mb-4">Start new tournament session</DrawerTitle>
            <DrawerDescription className="text-white-900">Your total balance from every rooms: {totalBalance} $</DrawerDescription>
            <ul className="flex gap-15 items-center justify-center">
              {roomsBalance?.map((room) => (
                <li key={room.id} className="flex items-center justify-center mt-6">
                  <DrawerDescription className="text-white=900">{room.name} {room.balance} $</DrawerDescription>
                </li>
              ))}
            </ul>
          </DrawerHeader>
          <DrawerFooter className="flex items-center justify-center">
            <DrawerClose
              className="h-1/2 w-1/2"
              onClick={() => addTournamentSession.mutate()}
            >
              Start new tournament session
            </DrawerClose>
            <DrawerClose className="w-1/2 h-1/3 flex items-center justify-center">
              Cancel
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
