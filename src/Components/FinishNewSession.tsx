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

export const FinishNewSession = () => {
  const { runningSessionId } = useCashSessionData();
  const { roomsBalance } = useBalanceData();
  const finishSession = useFinishCashSession();
  const editBalance = useEditBalance();
  const [pokerRoom, setPokerRoom] = useState(roomsBalance);
  const handleChange = (id, field, value) => {
    setPokerRoom(prev =>
      prev.map(item => (item.id === id ? { ...item, [field]: value } : item))
    );
  };
  const handleSubmit = () => {
    finishSession.mutate({id: runningSessionId, body: pokerRoom});
    pokerRoom.forEach(room => {
      editBalance.mutate({id: room.id, body: {name: room.name ,balance: room.balance}})
    })
  }

  return (
    <div className="h-1/3 w-full rounded-md border mt-8 flex items-center justify-center">
      <Drawer>
        <DrawerTrigger>Finish running session</DrawerTrigger>
        <DrawerContent className="h-1/2">
          <DrawerHeader>
            <DrawerTitle>Finish running session</DrawerTitle>
            <DrawerDescription>Enter balance for every room </DrawerDescription>
            <ul className='flex items-center justify-center gap-x-4'>
              {pokerRoom?.map((room) => (
                <li key={room.id} className="flex items-center justify-center mt-6">
                  <DrawerDescription>Room: {room.name} Balance:
                    <span className="flex">
                      <Input
                        type="number"
                        name="balance"
                        placeholder={room.balance}
                        value={pokerRoom.balance}
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
              className="h-1/2 w-1/2"
              onClick={handleSubmit}
            >
              Finish running session
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
