import { useDispatch } from 'react-redux';
import { setBalance } from '@/redux/balance/BalanceSlice';
import { store } from '@/redux/store';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Balance } from '@/Components/Balance';

export type AppDispatch = typeof store.dispatch

export const BalanceSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const buttonClick = () => {
    // @ts-ignore
    dispatch(setBalance(balance + 10));//
  }

  return (
    <div className="flex justify-between w-1/3 items-center">
      <Balance />
      {/*<Button type="button" onClick={buttonClick}>Change balance</Button>*/}
      <Avatar className="size-8">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
