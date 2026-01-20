export type Tokens = {
  accessToken: string
  refreshToken: string
}

export type User = {
  id: string
  name: string
  email: string
}

export type AuthResponse = {
  user: User
  tokens: Tokens
}
