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
    <div className="h-full w-full rounded-md border flex items-center justify-center">
      <Drawer>
        <DrawerTrigger>Finish running tournament session</DrawerTrigger>
        <DrawerContent className="h-1/2">
          <DrawerHeader>
            <DrawerTitle>Finish running tournament session</DrawerTitle>
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
  )
}
