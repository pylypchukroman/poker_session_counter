export const getBalancesSum = (balances) => {

  return balances.reduce((sum, { balance }) => sum + balance, 0);
};
