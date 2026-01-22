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

export type User = {
  id: string;
  email: string;
  name?: string;
};

export type AuthStatus = "loading" | "authenticated" | "unauthenticated";

export type AuthContextType = {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
};
