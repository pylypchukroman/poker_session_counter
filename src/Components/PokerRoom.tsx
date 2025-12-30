import { Item, ItemActions } from '@/Components/ui/item';
import { RoomBalancePopover } from '@/Components/RoomBalancePopover';
import { Button } from '@/Components/ui/button';
import { useDeleteBalance } from '@/Hooks/useBalanceMutations';

export const PokerRoom = ({ roomBalance }: any) => {
const deleteBalance = useDeleteBalance();

  return (
    <Item
      variant="outline"
      className="w-full flex justify-between"
    >
      {roomBalance.name}: {roomBalance.balance}
      <ItemActions>
        <RoomBalancePopover roomBalance={roomBalance}/>
        <Button
          type="button"
          onClick={() => deleteBalance.mutate(roomBalance._id)}
        >
          Delete
        </Button>
      </ItemActions>
    </Item>

  )
}
