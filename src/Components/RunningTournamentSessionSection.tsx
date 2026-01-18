import { FinishTournamentNewSession } from '@/Components/FinishTournamentNewSession';
import { ManageRunningSession } from '@/Components/ManageRunningSession';
import type { AddNewTournamentToSessionProps } from '@/types/propTypes';

export const RunningTournamentSessionSection = ({ runningSessionId }: AddNewTournamentToSessionProps) => {

  return (
    <div className="w-full flex gap-x-4 items-center justify-center">
      <ManageRunningSession runningSessionId={runningSessionId}/>
      <FinishTournamentNewSession runningSessionId={runningSessionId}/>
    </div>
  );
};
