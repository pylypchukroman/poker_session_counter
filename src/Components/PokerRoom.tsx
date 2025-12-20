import { Item, ItemActions } from '@/Components/ui/item';
import { Button } from '@/Components/ui/button';
import { RoomBalancePopover } from '@/Components/RoomBalancePopover';

export const PokerRoom = ({ roomData }: any) => {
  return (
    <Item
      variant="outline"
      className="w-full flex justify-between"
    >
      {roomData.name}: {roomData.balance}
      <ItemActions>
        <RoomBalancePopover roomData={roomData}/>
      </ItemActions>
    </Item>

  )
}
