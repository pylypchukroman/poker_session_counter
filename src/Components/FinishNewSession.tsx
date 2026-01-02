import {
  Drawer, DrawerClose,
  DrawerContent,
  DrawerDescription, DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/Components/ui/drawer';
import { Button } from '@/Components/ui/button';
import { useBalances } from '@/Hooks/useBalances';
import { Input } from '@/Components/ui/input';
import { useState } from 'react';

export const FinishNewSession = () => {
  const { data: roomsBalance, isLoading } = useBalances();
  const [test, setTest] = useState('');
  const body = [];

  return (
    <div className="h-1/3 w-full rounded-md border mt-8 flex items-center justify-center">
      <Drawer>
        <DrawerTrigger>Finish running session</DrawerTrigger>
        <DrawerContent className="h-1/2">
          <DrawerHeader>
            <DrawerTitle>Finish running session</DrawerTitle>
            <DrawerDescription>Enter balance for every room </DrawerDescription>
            <ul className='flex items-center justify-center gap-x-4'>
              {roomsBalance?.map((room) => (
                <li key={room.id} className="flex items-center justify-center mt-6">
                  <DrawerDescription>Room: {room.name} Balance:
                    <span className="flex">
                      <Input
                        value={test}
                        onChange={(e) => setTest(e.target.value)}
                        placeholder={room.balance}
                      />
                      <Button
                        onClick={() => body.push({name: room.name, balance: test})}
                      >
                        Confirm new balance</Button>
                      </span>
                  </DrawerDescription>
                </li>
              ))}
            </ul>
          </DrawerHeader>
          <DrawerFooter className="flex items-center justify-center">
            <DrawerClose
              className="h-1/2 w-1/2"
              onClick={() => console.log("click")}
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
