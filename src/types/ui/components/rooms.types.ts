import { Dispatch, SetStateAction } from 'react';
import type { Room } from '@/types';

export type PokerRoomProps = {
  roomBalance: Room
}

export type RoomInputProps = {
  room: string | null
  setRoom: Dispatch<SetStateAction<string | null>>
}
