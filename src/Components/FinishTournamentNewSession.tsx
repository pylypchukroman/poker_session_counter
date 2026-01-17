import {
  Drawer, DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/Components/ui/drawer';
import { useFinishTournamentSession } from '@/Hooks/useTournamentSessionsMutations';
import { useAuth } from '@/context/AuthContext';

export const FinishTournamentNewSession = ({ runningSessionId }) => {
  const finishTournamentSession = useFinishTournamentSession();
  const { accessToken } = useAuth();

  return (
      <Drawer>
        <DrawerTrigger className="h-[12vh] md:h-[18vh] px-4 py-2 text-white rounded-md bg-neutral-800 w-7xl">
          Finish running tournament session
        </DrawerTrigger>
        <DrawerContent className="h-[30vh] max-w-7xl mx-auto bg-neutral-800 rounded-md p-6 flex flex-col justify-between">
          <DrawerHeader>
            <DrawerTitle className="text-white mb-2 text-sm md:text-lg">Finish running tournament session</DrawerTitle>
          </DrawerHeader>
          <DrawerFooter className="flex items-center justify-center">
            <DrawerClose
              className="h-1/2 w-1/2"
              onClick={() => finishTournamentSession.mutate({ id: runningSessionId, token: accessToken })}
            >
              Finish running session
            </DrawerClose>
            <DrawerClose className="w-1/2 h-1/3 flex items-center justify-center">
              Cancel
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  );
};
