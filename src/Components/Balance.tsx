import { getBalance } from '../helpers/getBalance';

export const Balance = () => {
  const balance: number = getBalance();

  return (
    <div>
      Balance: ${balance}
    </div>
  );
}
