// import type { CashSession, Room, Tokens } from '@/types/types';
// import type { User } from '@/context/AuthContext';
// import type { SessionTournament, TournamentSession } from '@/types/types';
//
// /* =======================
//    COMMON
// ======================= */
//
// export type ApiResponse<T> = {
//   data: T
// }
//
// export type MessageResponse = {
//   message: string
// }
//
// /* =======================
//    AUTH
// ======================= */
//
// export type LoginPayload = {
//   email: string | File
//   password: string | File
// }
//
// export type LoginResponse = {
//   user: User
//   tokens: Tokens
// }
//
// export type RegisterPayload = {
//   name: string | File
//   email: string | File
//   password: string | File
// }
//
// export type RegisterResponse = {
//   name: string
//   email: string
// }
//
// export type LogoutResponse = MessageResponse
//
// /* =======================
//    BALANCES
// ======================= */
//
// export type AddBalanceBody = {
//   name: string
//   balance: number
// }
//
// export type AddBalancePayload = {
//   body: AddBalanceBody
//   token: string | null
// }
//
// export type EditBalancePayload = {
//   id: string
//   body: AddBalanceBody
//   token: string | null
// }
//
// export type DeleteBalancePayload = {
//   id: string
//   token: string | null
// }
//
// export type AddBalanceResponse = ApiResponse<Room>
// export type EditBalanceResponse = ApiResponse<Room>
// export type DeleteBalanceResponse = MessageResponse
//
// /* =======================
//    CASH SESSIONS
// ======================= */
//
// export type AddCashSessionPayload = {
//   body: CashSession[]
//   token: string | null
// }
//
// export type FinishCashSessionPayload = {
//   id: string
//   body: Room[]
//   token: string | null
// }
//
// export type DeleteCashSessionPayload = {
//   id: string
//   token: string | null
// }
//
// export type AddCashSessionResponse = ApiResponse<CashSession>
// export type FinishCashSessionResponse = ApiResponse<CashSession>
// export type DeleteCashSessionResponse = MessageResponse
//
// /* =======================
//    TOURNAMENT SESSIONS
// ======================= */
//
// export type AddTournamentSessionResponse = ApiResponse<TournamentSession>
//
// export type FinishTournamentSessionPayload = {
//   id: string
//   token: string | null
// }
//
// export type FinishTournamentSessionResponse = ApiResponse<TournamentSession>
//
// export type DeleteTournamentSessionPayload = {
//   id: string
//   token: string | null
// }
//
// export type DeleteTournamentSessionResponse = MessageResponse
//
// /* =======================
//    TOURNAMENTS
// ======================= */
//
// export type TournamentBody = {
//   runningSessionId: string
//   room: string | null
//   name: string
//   buyIn: number
// }
//
// export type AddTournamentPayload = {
//   body: TournamentBody
//   token: string | null
// }
//
// export type AddTournamentResponse = ApiResponse<SessionTournament>
//
// export type DeleteTournamentPayload = {
//   runningSessionId: string
//   tournamentId: string
//   token: string | null
// }
//
// export type DeleteTournamentResponse = MessageResponse
//
// export type FinishTournamentPayload = {
//   runningSessionId: string
//   tournamentId: string
//   result: number
//   accessToken: string | null
// }
//
// export type FinishTournamentResponse = ApiResponse<SessionTournament>
