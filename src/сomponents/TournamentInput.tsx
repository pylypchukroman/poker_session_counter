import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/сomponents/ui/popover';
import { Button } from '@/сomponents/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/сomponents/ui/command';
import { Check, ChevronsUpDown } from 'lucide-react';
import { getRoomTournaments } from '@/helpers/getRoomTournaments';
import type { TournamentInputProps } from '@/types';

export const TournamentInput = ({ tournament, setTournament, room}: TournamentInputProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const tournaments = getRoomTournaments(room);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w=[180px] md:w-[230px] justify-between text-white overflow-hidden text-xs"
        >
          {tournament.name
            ? tournaments.find((t) => t.name === tournament.name)?.name
            : "Select tournament..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[230px] p-0 max-h-[300px] overflow-hidden"
      >
        <Command className="h-full">
          <CommandInput
            className="text-white"
            placeholder="Search tournament..."
          />
          <CommandList
            className="h-full overflow-y-auto bg-neutral-800"
            onWheel={(e) => {
              e.stopPropagation()
            }}
          >
            <CommandEmpty>No tournament found.</CommandEmpty>
            <CommandGroup>
              {tournaments.map((r) => (
                <CommandItem
                  key={r.name}
                  value={r.name}
                  className="text-white"
                  onSelect={() => {
                    setTournament(
                      tournament.name === r.name
                        ? { name: "", buyIn: 0 }
                        : { name: r.name, buyIn: r.buyIn }
                    )
                    setOpen(false)
                  }}
                >
                  <Check
                    className={`mr-2 h-4 w-4 ${
                      tournament.name === r.name
                        ? "opacity-100"
                        : "opacity-0"
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
