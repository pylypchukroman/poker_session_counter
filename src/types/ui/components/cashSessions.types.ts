import type { CashSession } from '@/types';

export type CashSessionsListProps = {
  cashSessions: CashSession[]
  isLoading: boolean
}

export type CashSessionItemProps = {
  session: CashSession
}
