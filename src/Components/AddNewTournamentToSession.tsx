import { RoomInput } from '@/Components/RoomInput';
import { useState } from 'react';
import { TournamentInput } from '@/Components/TournamentInput';
import { Button } from '@/Components/ui/button';
import { useAddTournament } from '@/Hooks/useTournamentsMutation';
import { useEditBalance } from '@/Hooks/useBalanceMutations';
import { useBalanceData } from '@/Hooks/useBalanceData';
import type { AddNewTournamentToSessionProps, Tournament } from '@/types';
import { useQueryClient } from '@tanstack/react-query';
import { getBalanceBody } from '@/helpers/getBalanceBody';
import { getTournamentPayload } from '@/helpers/getTournamentPayload';
import { toast } from "sonner"
import { initTournamentState } from '@/assets/initTournamentState';

export const AddNewTournamentToSession = ({ runningSessionId }: AddNewTournamentToSessionProps) => {
  const [room, setRoom] = useState<string | null>(null);
  const [tournament, setTournament] = useState<Tournament>(initTournamentState);
  const addTournament = useAddTournament();
  const editBalance = useEditBalance();
  const { currentRoomBalance } = useBalanceData(room);

  const queryClient = useQueryClient();

  const onSubmit = () => {
    const newBalance = currentRoomBalance.balance - tournament.buyIn;

    if (newBalance < 0) {
      toast.error(`${room} balance must be bigger that tournament buy-in`)
      return;
    }

    const body = getBalanceBody(currentRoomBalance.name, newBalance);
    editBalance.mutate({ id: currentRoomBalance.id, body });

    const payload = getTournamentPayload(runningSessionId, room, tournament.name, tournament.buyIn);
    addTournament.mutate(
      { body: payload },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['tournament_sessions'] });
          queryClient.invalidateQueries({ queryKey: ['tournaments'] });
          setTournament(initTournamentState);
          setRoom("");
        },
      }
    );
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-2 md:gap-12">
      <RoomInput
        room={room}
        setRoom={setRoom}
      />
      <TournamentInput
        tournament={tournament}
        setTournament={setTournament}
        room={room}
      />
      <Button
        disabled={!room || !tournament.name}
        type="button"
        onClick={onSubmit}
      >
        Add tournament
      </Button>
    </div>
  );
};
