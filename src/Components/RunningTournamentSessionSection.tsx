import { FinishTournamentNewSession } from '@/Components/FinishTournamentNewSession';
import { ManageRunningSession } from '@/Components/ManageRunningSession';

export const RunningTournamentSessionSection = ({ runningSessionId }) => {

  return (
    <div className="w-full mt-8 flex gap-x-4 items-center justify-center">
      <ManageRunningSession runningSessionId={runningSessionId}/>
      <FinishTournamentNewSession runningSessionId={runningSessionId}/>
    </div>
  );
};
