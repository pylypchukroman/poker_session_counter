import { FinishTournamentNewSession } from '@/сomponents/FinishTournamentNewSession';
import { ManageRunningSession } from '@/сomponents/ManageRunningSession';
import type { AddNewTournamentToSessionProps } from '@/types';

export const RunningTournamentSessionSection = ({ runningSessionId }: AddNewTournamentToSessionProps) => {

  return (
    <div className="w-full flex gap-x-4 items-center justify-center">
      <ManageRunningSession runningSessionId={runningSessionId}/>
      <FinishTournamentNewSession runningSessionId={runningSessionId}/>
    </div>
  );
};
