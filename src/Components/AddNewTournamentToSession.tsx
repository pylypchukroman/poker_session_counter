import { RoomInput } from '@/Components/RoomInput';
import { useState } from 'react';
import { TournamentInput } from '@/Components/TournamentInput';
import { Button } from '@/Components/ui/button';
import { useAddTournament } from '@/Hooks/useTournamentsMutation';
import { useEditBalance } from '@/Hooks/useBalanceMutations';
import { useBalanceData } from '@/Hooks/useBalanceData';
import { useAuth } from '@/context/AuthContext';

export const AddNewTournamentToSession = ({ runningSessionId }) => {
  const initState = { name: "", buyIn: 0 };
  const [room, setRoom] = useState("");
  const [tournament, setTournament] = useState(initState);
  const addTournament = useAddTournament();
  const editBalance = useEditBalance();
  const { currentRoomBalance } = useBalanceData(room);
  const { accessToken } = useAuth();

  const click = () => {
    //balance logic
    const newBalance = currentRoomBalance.balance - tournament.buyIn;
    const body = {
      name: currentRoomBalance.name,
      balance: newBalance
    }
    editBalance.mutate({id: currentRoomBalance.id, body: body, token: accessToken})
    //balance logic
    //tournament logic
    const payload = {
      runningSessionId: runningSessionId,
      room: room,
      name: tournament.name,
      buyIn: tournament.buyIn,
    };
    addTournament.mutate({ body: payload, token: accessToken });
    //tournament logic
    setTournament(initState);
    setRoom("");
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
        onClick={click}
      >
        Add tournament
      </Button>
    </div>
  );
};
