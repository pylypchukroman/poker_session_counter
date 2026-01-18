import { useMutation } from '@tanstack/react-query';
import { loginUser } from '@/api/login';
import { useNavigate } from "react-router-dom";
import { useAuth } from '@/context/AuthContext';
import type { LoginPayload, LoginResponse } from '@/types/api';

export const useLoginMutation = () => {
  const navigate = useNavigate()
  const { setAuth } = useAuth()

  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: (data) => loginUser(data),

    onSuccess: (data) => {
      setAuth(data.user, data.tokens.accessToken)
      navigate('/cash')
    },
  })
}
