import { useMutation } from '@tanstack/react-query';
import { registerUser } from '@/api/register';
import { useNavigate } from "react-router-dom";
import type { RegisterPayload, RegisterResponse } from '@/types';

export const useRegisterMutation = () => {
  const navigate = useNavigate();

  return useMutation<RegisterResponse, Error, RegisterPayload>({
    mutationFn:(data) => registerUser(data),
    onSuccess: () => {
      navigate("/login");
    },
  });
};
