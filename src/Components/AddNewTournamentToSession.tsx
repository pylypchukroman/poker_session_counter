import { RoomInput } from '@/Components/RoomInput';
import { useState } from 'react';
import { TournamentInput } from '@/Components/TournamentInput';
import { Button } from '@/Components/ui/button';
import { useAddTournament } from '@/Hooks/useTournamentsMutation';
import { useEditBalance } from '@/Hooks/useBalanceMutations';
import { useBalanceData } from '@/Hooks/useBalanceData';

export const AddNewTournamentToSession = ({ runningSessionId }) => {
  const initState = { name: "", buyIn: 0 };
  const [room, setRoom] = useState("");
  const [tournament, setTournament] = useState(initState);
  const addTournament = useAddTournament();
  const editBalance = useEditBalance();
  const { currentRoomBalance } = useBalanceData(room);

  const click = () => {
    //balance logic
    const newBalance = currentRoomBalance.balance - tournament.buyIn;
    const body = {
      name: currentRoomBalance.name,
      balance: newBalance
    }
    editBalance.mutate({id: currentRoomBalance.id, body: body})
    //balance logic
    //tournament logic
    const payload = {
      runningSessionId: runningSessionId,
      room: room,
      name: tournament.name,
      buyIn: tournament.buyIn,
    };
    addTournament.mutate(payload);
    //tournament logic
    setTournament(initState);
    setRoom("");
  };

  return (
    <div className="flex items-center">
      <p className="mr-4">Room</p>
      <RoomInput
        room={room}
        setRoom={setRoom}
      />
      <p className="mr-4">Tournament</p>
      <TournamentInput
        tournament={tournament}
        setTournament={setTournament}
        room={room}
      />
      <Button
        disabled={!room || !tournament.name}
        className="ml-6"
        type="button"
        onClick={click}
      >
        Add tournament
      </Button>
    </div>
  );
};
