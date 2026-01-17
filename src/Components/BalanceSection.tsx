import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Balance } from '@/Components/Balance';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/Components/ui/dropdown-menu';
import { useLogoutMutation } from '@/Hooks/useLogoutMutation';

export const BalanceSection = () => {
  const logout = useLogoutMutation();
  const click = () => {
    logout.mutate();
  }

  return (
    <div className="flex justify-between w-xs items-center relative">
      <Balance />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="size-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuItem
            className="bg-neutral-800 text-white"
            onClick={click}
          >
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
