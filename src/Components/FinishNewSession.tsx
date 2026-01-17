import {
  Drawer, DrawerClose,
  DrawerContent,
  DrawerDescription, DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/Components/ui/drawer';
import { Input } from '@/Components/ui/input';
import { useState } from 'react';
import { useFinishCashSession } from '@/Hooks/useCashSessionMutations';
import { useEditBalance } from '@/Hooks/useBalanceMutations';
import { useBalanceData } from '@/Hooks/useBalanceData';
import { useCashSessionData } from '@/Hooks/useCashSessionData';
import { useAuth } from '@/context/AuthContext';

export const FinishNewSession = () => {
  const { runningSessionId } = useCashSessionData();
  const { roomsBalance } = useBalanceData();
  const finishSession = useFinishCashSession();
  const editBalance = useEditBalance();
  const [pokerRoom, setPokerRoom] = useState(roomsBalance);
  const { accessToken } = useAuth();

  const handleChange = (id, field, value) => {
    setPokerRoom(prev =>
      prev.map(item => (item.id === id ? { ...item, [field]: value } : item))
    );
  };
  const handleSubmit = () => {
    finishSession.mutate({id: runningSessionId, body: pokerRoom, token: accessToken});
    pokerRoom.forEach(room => {
      editBalance.mutate({id: room.id, body: {name: room.name ,balance: room.balance}, token: accessToken})
    })
  }

  return (
      <Drawer>
        <DrawerTrigger className="h-[12vh] md:h-[18vh] text-white px-4 py-2 rounded-md bg-neutral-800">
          Finish running session
        </DrawerTrigger>
        <DrawerContent className="h-[38vh] md:h-[46vh] max-w-7xl mx-auto bg-neutral-800 rounded-md p-6 flex flex-col justify-between">
          <DrawerHeader>
            <DrawerTitle className="text-white mb-4 text-sm md:text-lg">Finish running session</DrawerTitle>
            <DrawerDescription className="text-white-900 text-xs md:text-sm">Enter balance for your rooms </DrawerDescription>
            <ul className='flex items-center justify-center gap-x-4'>
              {pokerRoom?.map((room) => (
                <li key={room.id} className="flex items-center justify-center mt-4">
                  <DrawerDescription className="text-white-900 text-xs md:text-sm">{room.name} Balance:
                    <span className="flex mt-2">
                      <Input
                        className="h-7 md:h-9"
                        type="number"
                        name="balance"
                        placeholder={room.balance}
                        value={pokerRoom.balance}
                        min={0}
                        onChange={e => handleChange(room.id, e.target.name, Number(e.target.value))}
                      />
                      </span>
                  </DrawerDescription>
                </li>
              ))}
            </ul>
          </DrawerHeader>
          <DrawerFooter className="flex items-center justify-center">
            <DrawerClose
              className="h-1/2 w-1/2 !text-sm !px-2 !py-1 md:!text-base md:!px-4 md:!py-2"
              onClick={handleSubmit}
            >
              Finish running session
            </DrawerClose>
            <DrawerClose className="w-1/2 h-1/3 flex items-center justify-center !text-sm !px-2 !py-1 md:!text-base md:!px-4 md:!py-2">
              Cancel
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  );
};
