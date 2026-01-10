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
    <div className="h-1/3 w-full rounded-md border mt-8 flex items-center justify-center">
      <Drawer>
        <DrawerTrigger>Start new tournament session</DrawerTrigger>
        <DrawerContent className="h-1/2">
          <DrawerHeader>
            <DrawerTitle>Start new tournament session</DrawerTitle>
            <DrawerDescription>Your total balance from every rooms: {totalBalance}</DrawerDescription>
            <ul>
              {roomsBalance?.map((room) => (
                <li key={room.id} className="flex items-center justify-center mt-6">
                  <DrawerDescription>Room: {room.name} Balance: {room.balance}</DrawerDescription>
                </li>
              ))}
            </ul>
          </DrawerHeader>
          <DrawerFooter className="flex items-center justify-center">
            <DrawerClose
              className="h-1/2 w-1/2"
              onClick={() => addTournamentSession.mutate()}
            >
              Start new cash session
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
