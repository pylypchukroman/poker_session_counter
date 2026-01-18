import { Tokens } from '@/types/types';
import { User } from '@/context/AuthContext';

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
  email: string
  name: string
}
