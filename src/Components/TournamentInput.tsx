// noinspection TypeScriptValidateTypes

import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/Components/ui/popover';
import { Button } from '@/Components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/Components/ui/command';
import { Check, ChevronsUpDown } from 'lucide-react';
import { getRoomTournaments } from '@/helpers/getRoomTournaments';

export const TournamentInput = ({ tournament, setTournament, room}) => {
  const [open, setOpen] = useState(false);
  const tournaments = getRoomTournaments(room);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-[230px] justify-between text-white overflow-hidden text-xs"
        >
          {tournament.name
            ? tournaments.find((t) => t.name === tournament.name)?.name
            : "Select tournament..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[230px] p-0">
        <Command>
          <CommandInput className="text-white" placeholder="Search framework..." />
          <CommandList className="bg-neutral-800">
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {tournaments?.map((r) => (
                <CommandItem
                  className="text-white"
                  key={r.name}
                  value={r.name}
                  onSelect={() => {
                    setTournament(prev =>
                      prev.name === r.name ? { name: "", buyIn: 0 } : { name: r.name, buyIn: r.buyIn }
                    );
                    setOpen(false)
                  }}
                >
                  <Check
                    className={`mr-2 h-4 w-4 ${
                      tournament.name === r.name ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {r.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
