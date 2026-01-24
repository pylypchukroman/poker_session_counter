import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/сomponents/ui/drawer';
import { SessionTournaments } from '@/сomponents/SessionTournaments';
import { AddNewTournamentToSession } from '@/сomponents/AddNewTournamentToSession';
import type { AddNewTournamentToSessionProps } from '@/types';

export const ManageRunningSession = ({ runningSessionId }: AddNewTournamentToSessionProps) => {

  return (
      <Drawer>
        <DrawerTrigger className="h-[12vh] md:h-[18vh] px-4 py-2 text-white rounded-md bg-neutral-800 w-7xl">Manage running session</DrawerTrigger>
        <DrawerContent className="h-[84vh] max-w-7xl mx-auto bg-neutral-800 rounded-md p-6 flex flex-col justify-between">
          <DrawerHeader>
            <DrawerTitle className="text-white text-sm md:text-lg">Manage running session</DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col gap-4">
            <div className="h-[120px] md:h-[90px] flex flex-col border-t border-b border-neutral-600 h-24 items-center justify-center">
              <span className="text-white-900 mb-4 text-xs md:text-sm">Add new tournaments to session</span>
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
