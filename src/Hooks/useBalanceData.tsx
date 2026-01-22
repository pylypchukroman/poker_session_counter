import { useBalances } from '@/Hooks/useBalances';
import type { Room } from '@/types';

export const useBalanceData = (room?: string | null) => {
  const { data: roomsBalance, isLoading } = useBalances();

  const totalBalance: number | undefined = roomsBalance?.reduce(
    (acc, room) => acc + Number(room.balance), 0);

  const currentRoomBalance: Room = roomsBalance?.find(b => b.name === room);

  const isZeroBalance: boolean = totalBalance === 0;

  return { roomsBalance, isLoading, totalBalance, currentRoomBalance, isZeroBalance };
};
