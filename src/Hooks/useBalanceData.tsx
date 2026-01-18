import { useBalances } from '@/Hooks/useBalances';
import type { Room } from '@/types/types';

export const useBalanceData = (room?: string | null) => {
  const { data: roomsBalance, isLoading } = useBalances();

  const totalBalance: number | undefined = roomsBalance?.reduce(
    (acc, room) => acc + Number(room.balance), 0);

  const currentRoomBalance: Room = roomsBalance?.find(b => b.name === room);

  return {roomsBalance, isLoading, totalBalance, currentRoomBalance};
};
