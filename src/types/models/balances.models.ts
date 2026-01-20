export type RoomBalance = {
  name: string
  balance: number
}

export type Room = {
  id: string
  name: string
  balance: number
  ownerId: string
}

export type BalanceSnapshot = {
  room: string
  balance: number
}
