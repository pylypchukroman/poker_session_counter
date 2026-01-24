import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/Components/ui/popover';
import { Button } from '@/Components/ui/button';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/Components/ui/command';
import type { RoomInputProps } from '@/types';
import { useBalanceData } from '@/Hooks/useBalanceData';
import { getUniqRoomsList } from '@/helpers/getUniqRoomsList';

export const RoomSelect = ({ selectedRoom, setSelectedRoom }: RoomInputProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const balance = useBalanceData()
  const roomsList = getUniqRoomsList(balance);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="col-span-3 justify-between text-white overflow-hidden text-xs"
        >
          {selectedRoom ? selectedRoom : "Select room..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[230px] p-0">
        <Command>
          <CommandInput className="text-white" placeholder="Search room..." />
          <CommandList className="bg-neutral-800">
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {roomsList?.map((room) => (
                <CommandItem
                  className="text-white"
                  key={room}
                  value={room}
                  onSelect={() => {
                    setSelectedRoom(room);
                    setOpen(false)
                  }}
                >
                  <Check
                    className={`mr-2 h-4 w-4 ${
                      room === selectedRoom ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {room}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
