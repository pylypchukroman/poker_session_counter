import {
  Drawer, DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/Components/ui/drawer';
import { useFinishTournamentSession } from '@/Hooks/useTournamentSessionsMutations';

export const FinishTournamentNewSession = ({ runningSessionId }) => {
  const finishTournamentSession = useFinishTournamentSession();

  return (
    <div className="h-[20vh] w-full rounded-md flex items-center justify-center bg-neutral-800">
      <Drawer>
        <DrawerTrigger>Finish running tournament session</DrawerTrigger>
        <DrawerContent className="h-[25vh] max-w-7xl bg-neutral-800">
          <DrawerHeader>
            <DrawerTitle className="text-white mb-2">Finish running tournament session</DrawerTitle>
          </DrawerHeader>
          <DrawerFooter className="flex items-center justify-center">
            <DrawerClose
              className="h-1/2 w-1/2"
              onClick={() => finishTournamentSession.mutate(runningSessionId)}
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
  );
};
