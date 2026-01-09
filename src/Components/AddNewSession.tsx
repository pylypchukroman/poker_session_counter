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
    <div className="h-1/3 w-full rounded-md border mt-8 flex items-center justify-center">
      <Drawer>
        <DrawerTrigger>Start new session</DrawerTrigger>
        <DrawerContent className="h-1/2">
          <DrawerHeader>
            <DrawerTitle>Start new cash session</DrawerTitle>
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
    </div>
  )
}
