import { roomTournaments } from '@/assets/tournaments';

export const getRoomTournaments = (room) => {

  return roomTournaments.find(r => r.pokerRoom === room)?.tournaments;
}
