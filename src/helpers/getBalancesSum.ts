import type { RoomBalance } from '@/types/types';

export const getBalancesSum: (balances: [RoomBalance]) => number = (balances: [RoomBalance]) => {

  return balances.reduce((sum, { balance }) => sum + balance, 0);
};
