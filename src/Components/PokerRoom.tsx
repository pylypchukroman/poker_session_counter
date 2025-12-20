import { Item, ItemActions } from '@/Components/ui/item';
import { Button } from '@/Components/ui/button';

export const PokerRoom = ({ roomData }: any) => {
  return (
    <Item
      variant="outline"
      className="w-full flex justify-between"
    >
      {roomData.name}: {roomData.balance}
      <ItemActions>
        <Button size="sm">
          Action
        </Button>
      </ItemActions>
    </Item>

  )
}
