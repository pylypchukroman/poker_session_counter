import type { BalanceSnapshot } from '@/types';

export type SessionStatus = 'running' | 'finished'

export type CashSession = {
  id: string
  ownerId: string
  startedAt: string
  finishedAt: string | null
  status: SessionStatus
  balancesStart: BalanceSnapshot[]
  balancesEnd: BalanceSnapshot[]
}
