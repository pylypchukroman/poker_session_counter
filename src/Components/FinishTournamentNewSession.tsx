import {
  Drawer, DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/Components/ui/drawer';
import { useFinishTournamentSession } from '@/Hooks/useTournamentSessionsMutations';
import type { AddNewTournamentToSessionProps } from '@/types';
import { useState } from 'react';
import { useTournamentData } from '@/Hooks/useTournamentData';
import { toast } from 'sonner';

export const FinishTournamentNewSession = ({ runningSessionId }: AddNewTournamentToSessionProps) => {
  const finishTournamentSession = useFinishTournamentSession();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isAllTournamentsFinished } = useTournamentData(runningSessionId);

  const onClick = () => {
    if (isAllTournamentsFinished) {
      toast.info("All tournaments must be finished");
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
      <Drawer open={isOpen}>
        <DrawerTrigger
          onClick={onClick}
          className="h-[12vh] md:h-[18vh] px-4 py-2 text-white rounded-md bg-neutral-800 w-7xl"
          style={{
            opacity: isAllTournamentsFinished ? 0.5 : 1,
            cursor: isAllTournamentsFinished ? "not-allowed" : "pointer",
          }}
        >
          Finish running tournament session
        </DrawerTrigger>
        <DrawerContent className="h-[30vh] max-w-7xl mx-auto bg-neutral-800 rounded-md p-6 flex flex-col justify-between">
          <DrawerHeader>
            <DrawerTitle className="text-white mb-2 text-sm md:text-lg">Finish running tournament session</DrawerTitle>
          </DrawerHeader>
          <DrawerFooter className="flex items-center justify-center">
            <DrawerClose
              className="h-1/2 w-1/2"
              onClick={() => finishTournamentSession.mutate({ id: runningSessionId })}
            >
              Finish running session
            </DrawerClose>
            <DrawerClose
              onClick={() => setIsOpen(false)}
              className="w-1/2 h-1/3 flex items-center justify-center"
            >
              Cancel
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  );
};
