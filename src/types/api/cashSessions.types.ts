import type { ApiResponse, CashSession, MessageResponse, Room } from '@/types';

export type AddCashSessionPayload = {
  body: CashSession[]
}

export type FinishCashSessionPayload = {
  id: string
  body: Room[]
}

export type DeleteCashSessionPayload = {
  id: string
}

export type AddCashSessionResponse = ApiResponse<CashSession>
export type FinishCashSessionResponse = ApiResponse<CashSession>
export type DeleteCashSessionResponse = MessageResponse
