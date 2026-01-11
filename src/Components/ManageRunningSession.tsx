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
    <div className="h-[20vh] w-full rounded-md flex items-center justify-center bg-neutral-800">
      <Drawer>
        <DrawerTrigger>Manage running session</DrawerTrigger>
        <DrawerContent className="h-[50vh] max-w-7xl bg-neutral-800">
          <DrawerHeader>
            <DrawerTitle className="text-white">Manage running session</DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col border-t border-b border-neutral-600 h-24 items-center justify-center">
              <span className="text-white-900 mb-4">Add new tournaments to session</span>
              <AddNewTournamentToSession runningSessionId={runningSessionId}/>
            </div>
            <div className="flex flex-col h-80 p-4">
              <span className="mb-4 text-white-900">
                Session's tournaments
              </span>
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
