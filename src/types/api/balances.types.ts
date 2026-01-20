import type { ApiResponse, MessageResponse, Room } from '@/types';

export type AddBalanceBody = {
  name: string
  balance: number
}

export type AddBalancePayload = {
  body: AddBalanceBody
  token: string | null
}

export type EditBalancePayload = {
  id: string
  body: AddBalanceBody
  token: string | null
}

export type DeleteBalancePayload = {
  id: string
  token: string | null
}

export type AddBalanceResponse = ApiResponse<Room>
export type EditBalanceResponse = ApiResponse<Room>
export type DeleteBalanceResponse = MessageResponse
