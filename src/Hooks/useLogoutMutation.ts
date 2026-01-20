import { useAuth } from '@/context/AuthContext';
import { useMutation } from '@tanstack/react-query';
import { logoutUser } from '@/api/logout';
import type { LogoutResponse } from '@/types';

export const useLogoutMutation = () => {
  const { logout, accessToken } = useAuth();

  return useMutation<LogoutResponse, Error>({
    mutationFn:() => logoutUser(accessToken),
    onSuccess: () => {
      logout();
    },
  });
};
