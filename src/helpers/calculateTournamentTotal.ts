import type { TournamentResult } from '@/types';

export const calculateTournamentTotal = (tournaments: TournamentResult[], flag: string) => {

  switch (flag) {
    case "buyIn":
      return tournaments.reduce((sum, { buyIn })=>  sum + buyIn, 0);
    case "result":
      return tournaments.reduce((sum, { result })=>  sum + result, 0);
    default:
    return 0;
  }
};
