import type { ApiResponse, MessageResponse, Room } from '@/types';

export type AddBalanceBody = {
  name: string
  balance: number
}

export type AddBalancePayload = {
  body: AddBalanceBody
}

export type EditBalancePayload = {
  id: string
  body: AddBalanceBody
}

export type DeleteBalancePayload = {
  id: string
}

export type AddBalanceResponse = ApiResponse<Room>
export type EditBalanceResponse = ApiResponse<Room>
export type DeleteBalanceResponse = MessageResponse
