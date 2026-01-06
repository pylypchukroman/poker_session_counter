import { FinishTournamentNewSession } from '@/Components/FinishTournamentNewSession';
import { AddNewTournamentToSession } from '@/Components/AddNewTournamentToSession';

export const RunningTournamentSessionSection = ({ tournamentSessions }) => {
  const runningSessionId = tournamentSessions.find(session => session.status === "running").id;

  return (
    <div className="h-1/3 w-full mt-8 flex gap-x-4 items-center justify-center">
      <AddNewTournamentToSession runningSessionId={runningSessionId}/>
      <FinishTournamentNewSession runningSessionId={runningSessionId}/>
    </div>
  )
}
