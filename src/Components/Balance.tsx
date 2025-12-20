import { useDispatch, useSelector } from 'react-redux';
import { Button } from "@/components/ui/button"
import { selectBalance } from '@/redux/balance/selectors';
import { setBalance } from '@/redux/balance/BalanceSlice';
import { store } from '@/redux/store';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
      <Button type="button" onClick={buttonClick}>Change balance</Button>
      <Avatar className="size-12">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
