import { Item, ItemActions } from '@/Components/ui/item';
import { RoomBalancePopover } from '@/Components/RoomBalancePopover';
import { Button } from '@/Components/ui/button';
import { deleteBalance } from '@/api/balanceApi';

export const PokerRoom = ({ roomBalance }: any) => {

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
          onClick={() => deleteBalance(roomBalance._id)}
        >
          Delete
        </Button>
      </ItemActions>
    </Item>

  )
}
