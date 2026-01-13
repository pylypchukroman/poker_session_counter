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
      <Drawer>
        <DrawerTrigger className="h-[18vh] px-4 py-2 text-white rounded-md bg-neutral-800 w-7xl">Manage running session</DrawerTrigger>
        <DrawerContent className="max-w-7xl mx-auto bg-neutral-800 rounded-md p-6 flex flex-col justify-between">
          <DrawerHeader>
            <DrawerTitle className="text-white">Manage running session</DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col border-t border-b border-neutral-600 h-24 items-center justify-center">
              <span className="text-white-900 mb-4">Add new tournaments to session</span>
              <AddNewTournamentToSession runningSessionId={runningSessionId}/>
            </div>
            <div className="flex flex-col h-80">
              <span className="text-white-900">
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
  );
};
