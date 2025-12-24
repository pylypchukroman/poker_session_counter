export type RoomsBalance = {
  id: number;
  name: string;
  balance: number;
}

export type BalanceResponse = {
  id: number;
  roomsBalance: RoomsBalance[];
}
