import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/Components/ui/drawer';
import { SessionTournaments } from '@/Components/SessionTournaments';
import { AddNewTournamentToSession } from '@/Components/AddNewTournamentToSession';

export const ManageRunningSession = ({ runningSessionId }) => {

  return (
    <div className="h-full w-full rounded-md border flex items-center justify-center">
      <Drawer>
        <DrawerTrigger>Manage running session</DrawerTrigger>
        <DrawerContent className="h-full">
          <DrawerHeader>
            <DrawerTitle>Manage running session</DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col gap-4">
            <div className="text-black flex flex-col border h-24 p-4">
              Add new tournaments to session
              <AddNewTournamentToSession runningSessionId={runningSessionId}/>
            </div>
            <div className="text-black flex flex-col border h-80 p-4">
              <p className="mb-4">
                Session's tournaments
              </p>
              <ul>
                <SessionTournaments runningSessionId={runningSessionId}/>
              </ul>
            </div>
          </div>
          <DrawerFooter className="flex items-center justify-center">
            <DrawerClose className="w-1/2 flex items-center justify-center">
              Cancel
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
