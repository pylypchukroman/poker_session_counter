import { useMutation } from '@tanstack/react-query';
import { registerUser } from '@/api/register';
import { useNavigate } from "react-router-dom";

export const useRegisterMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn:(data) => registerUser(data),
    onSuccess: () => {
      navigate("/login");
    },
  });
};
