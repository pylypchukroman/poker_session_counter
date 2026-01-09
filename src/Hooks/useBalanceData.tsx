import { useBalances } from '@/Hooks/useBalances';

export const useBalanceData = (room?: string) => {
  const { data: roomsBalance, isLoading } = useBalances();

  const totalBalance = roomsBalance?.reduce(
    (acc, room) => acc + Number(room.balance), 0);

  const currentRoomBalance = roomsBalance?.find(b => b.name === room);

  return {roomsBalance, isLoading, totalBalance, currentRoomBalance};
}
