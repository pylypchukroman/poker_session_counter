import { Item, ItemActions } from '@/Components/ui/item';
import { RoomBalancePopover } from '@/Components/RoomBalancePopover';
import { Button } from '@/Components/ui/button';
import { useDeleteBalance } from '@/Hooks/useBalanceMutations';

export const PokerRoom = ({ roomBalance }: any) => {
const deleteBalance = useDeleteBalance();

  return (
    <Item
      variant="outline"
      className="max-w-2xl flex-col justify-between"
    >
      <div className=" grid grid-cols-[1fr_1fr_1fr] items-center px-2 text-sm">
        <span>{roomBalance.name}</span>
        <span>{roomBalance.balance} $</span>
      <ItemActions>
        <RoomBalancePopover roomBalance={roomBalance}/>
        <Button
          type="button"
          onClick={() => deleteBalance.mutate(roomBalance.id)}
        >
          Delete
        </Button>
      </ItemActions>
      </div>
    </Item>

  );
};
