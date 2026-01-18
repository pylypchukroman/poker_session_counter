import { roomTournaments } from '@/assets/tournaments';
import type { Tournament } from '@/types/types';

export const getRoomTournaments = (room: string | null): Tournament[] => {
  return (
    roomTournaments.find(r => r.pokerRoom === room)?.tournaments ?? []
  )
}
