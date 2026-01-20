import type { ApiResponse, CashSession, MessageResponse, Room } from '@/types';

export type AddCashSessionPayload = {
  body: CashSession[]
  token: string | null
}

export type FinishCashSessionPayload = {
  id: string
  body: Room[]
  token: string | null
}

export type DeleteCashSessionPayload = {
  id: string
  token: string | null
}

export type AddCashSessionResponse = ApiResponse<CashSession>
export type FinishCashSessionResponse = ApiResponse<CashSession>
export type DeleteCashSessionResponse = MessageResponse
