import { useDispatch, useSelector } from 'react-redux';
import { selectBalance } from '../redux/balance/selectors';
import { setBalance } from '../redux/balance/BalanceSlice';
import { store } from '../redux/store';

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const Balance = () => {
  const dispatch = useDispatch<AppDispatch>();
  const balance: number = useSelector((state: RootState) => selectBalance(state))
  const buttonClick = () => {
    // @ts-ignore
    dispatch(setBalance(balance + 10));//
  }

  return (
    <div>
      Balance: ${balance}
      <button type="button" onClick={buttonClick}>Change balance</button>
    </div>
  );
}
