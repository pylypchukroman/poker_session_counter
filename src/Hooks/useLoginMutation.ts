import { useMutation } from '@tanstack/react-query';
import { loginUser } from '@/api/login';
import { useNavigate } from "react-router-dom";
import { useAuth } from '@/context/AuthContext';

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  return useMutation({
    mutationFn:(data) => loginUser(data),
    onSuccess: (data) => {
      setAuth(data.user, data.tokens.accessToken);
      navigate("/home");
    },
  });
};
