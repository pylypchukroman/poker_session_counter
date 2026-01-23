import { useMutation } from '@tanstack/react-query';
import { loginUser } from '@/api/login';
import { useAuth } from '@/context/AuthContext';
import type { LoginPayload, LoginResponse } from '@/types';
import { toast } from 'sonner';

export const useLoginMutation = () => {
  const { setAuth } = useAuth();

  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: (data) => loginUser(data),

    onSuccess: (data) => {
      setAuth(data.user, data.tokens.accessToken);
      toast.success(`Successful login, ${data.user.name}`);
      window.location.href = "/cash";
    },
    onError: () => {
      toast.error("Email or password wrong");
    },
  });
};
