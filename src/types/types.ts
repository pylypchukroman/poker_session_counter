// /* =======================
//    COMMON
// ======================= */
//
// export type SessionStatus = 'running' | 'finished'
//
// /* =======================
//    ROOMS & BALANCES
// ======================= */
//
// export type RoomBalance = {
//   name: string
//   balance: number
// }
//
// export type Room = {
//   id: string
//   name: string
//   balance: number
//   ownerId: string
// }
//
// export type BalanceSnapshot = {
//   roomName: string
//   balance: number
// }
//
// /* =======================
//    CASH SESSIONS
// ======================= */
//
// export type CashSession = {
//   id: string
//   ownerId: string
//   startedAt: string
//   finishedAt: string | null
//   status: SessionStatus
//   balancesStart: BalanceSnapshot[]
//   balancesEnd: BalanceSnapshot[]
// }
//
// /* =======================
//    TOURNAMENTS
// ======================= */
//
// export type BaseTournament = {
//   name: string
// }
//
// export type Tournament = BaseTournament & {
//   buyIn: number
// }
//
// export type TournamentResult = Tournament & {
//   result: number
// }
//
// export type SessionTournament = {
//   id: string
//   name: string
//   room: string
//   buyIn: number
//   result: number
//   status: SessionStatus
//   startedAt: string
//   finishedAt: string
// }
//
// export type TournamentSession = {
//   id: string
//   ownerId: string
//   startedAt: string
//   finishedAt: string
//   status: SessionStatus
//   tournaments: SessionTournament[]
// }
//
// /* =======================
//    AUTH
// ======================= */
//
// export type Tokens = {
//   accessToken: string
//   refreshToken: string
// }
//
// export type User = {
//   id: string
//   name: string
//   email: string
// }
//
// export type AuthResponse = {
//   user: User
//   tokens: Tokens
// }
