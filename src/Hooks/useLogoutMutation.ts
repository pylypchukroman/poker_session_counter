import { useAuth } from '@/context/AuthContext';
import { useMutation } from '@tanstack/react-query';
import { logoutUser } from '@/api/logout';

export const useLogoutMutation = () => {
  const { logout, accessToken } = useAuth();

  return useMutation({
    mutationFn:() => logoutUser(accessToken),
    onSuccess: () => {
      logout();
    },
  });
};
