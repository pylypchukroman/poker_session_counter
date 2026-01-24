import { Avatar, AvatarFallback, AvatarImage } from "@/сomponents/ui/avatar";
import { Balance } from '@/сomponents/Balance';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/сomponents/ui/dropdown-menu';
import { useLogoutMutation } from '@/Hooks/useLogoutMutation';

export const BalanceSection = () => {
  const logout = useLogoutMutation();

  return (
    <div className="flex justify-between w-xs items-center relative">
      <Balance />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="size-6 md:size-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuItem
            className="bg-neutral-800 text-white"
            onClick={() => logout.mutate()}
          >
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
