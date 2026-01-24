import { getFilteredRoomsList } from '@/helpers/getFilteredRoomsList';
import { roomsList } from '@/assets/roomsList';

export const getUniqRoomsList = (balance) => {
  const chosenRooms = getFilteredRoomsList(balance);

  return roomsList.filter(room => !chosenRooms.includes(room));
}
