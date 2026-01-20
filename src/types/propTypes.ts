// import type { CashSession, Room, SessionTournament, Tournament, TournamentSession } from '@/types/types';
// import { Dispatch, SetStateAction } from 'react';
//
// export type InfoBlockProps = {
//   label: string
//   value: string
//   valueClass?: string
// }
//
// /* =======================
//    CASH SESSIONS
// ======================= */
//
// export type CashSessionsListProps = {
//   cashSessions: CashSession[]
// }
//
// export type CashSessionItemProps = {
//   session: CashSession
// }
//
// /* =======================
//    ROOMS
// ======================= */
//
// export type PokerRoomProps = {
//   roomBalance: Room
// }
//
// export type RoomInputProps = {
//   room: string | null
//   setRoom: Dispatch<SetStateAction<string | null>>
// }
//
// /* =======================
//    TOURNAMENTS
// ======================= */
//
// export type AddNewTournamentToSessionProps = {
//   runningSessionId: string
// }
//
// export type TournamentSessionsListProps = {
//   tournamentSessions: TournamentSession[]
// }
//
// export type TournamentSessionItemProps = {
//   session: TournamentSession
// }
//
// export type TournamentInputProps = {
//   tournament: Tournament
//   setTournament: Dispatch<SetStateAction<Tournament>>
//   room: string | null
// }
//
// /* =======================
//    TOURNAMENT DETAILS / POPOVERS
// ======================= */
//
// export type TournamentStatus =
//   | 'pending'
//   | 'running'
//   | 'finished'
//
// export type FinishTournamentPopoverProps = {
//   tournamentName: string
//   tournamentId: string
//   runningSessionId: string
//   tournamentStatus: TournamentStatus
//   tournamentRoom: string
// }
//
// export type TournamentDetailsPopoverProps = {
//   startDate: string
//   finishDate: string
//   totalBuyIns: number
//   totalResult: number
//   sessionResult: number
//   tournaments: SessionTournament[]
// }
//
// export type TournamentDetailsListProps = {
//   tournaments: SessionTournament[]
// }
