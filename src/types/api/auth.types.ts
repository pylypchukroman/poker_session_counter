import type { MessageResponse, Tokens, User } from '@/types';

export type LoginPayload = {
  email: string | File
  password: string | File
}

export type LoginResponse = {
  user: User
  tokens: Tokens
}

export type RegisterPayload = {
  name: string | File
  email: string | File
  password: string | File
}

export type RegisterResponse = {
  name: string
  email: string
}

export type LogoutResponse = MessageResponse
