import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Balance } from '@/Components/Balance';

export const BalanceSection = () => {

  return (
    <div className="flex justify-between w-1/3 items-center">
      <Balance />
      <Avatar className="size-8">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};
