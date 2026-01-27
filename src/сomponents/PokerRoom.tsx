import { Item, ItemActions } from '@/сomponents/ui/item';
import { RoomBalancePopover } from '@/сomponents/RoomBalancePopover';
import { Button } from '@/сomponents/ui/button';
import { useDeleteBalance } from '@/Hooks/useBalanceMutations';
import type { PokerRoomProps } from '@/types';

export const PokerRoom = ({ roomBalance }: PokerRoomProps) => {
const deleteBalance = useDeleteBalance();

  return (
    <Item
      variant="outline"
      className="max-w-2xl flex-col justify-between"
    >
      <div className=" grid grid-cols-[1fr_1fr_1fr] items-center px-2 text-sm">
        <span>{roomBalance.name}</span>
        <span>{Number(roomBalance.balance.toFixed(1))} $</span>
      <ItemActions>
        <RoomBalancePopover roomBalance={roomBalance}/>
        <Button
          type="button"
          onClick={() => deleteBalance.mutate({ id: roomBalance.id })}
        >
          Delete
        </Button>
      </ItemActions>
      </div>
    </Item>

  );
};
