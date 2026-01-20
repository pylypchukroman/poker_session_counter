import type { BalanceSnapshot } from '@/types';


export const getBalancesSum = (balances: BalanceSnapshot[]): number => {
  return balances.reduce((sum, { balance }) => sum + balance, 0);
}
