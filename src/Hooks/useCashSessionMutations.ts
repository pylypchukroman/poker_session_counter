import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCashSession, deleteCashSession } from '@/api/cashSession';
import { addBalance } from '@/api/balance';

export const useDeleteCashSession = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteCashSession(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cash_sessions'],
      });
    },
  });
};

export const useAddCashSession = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: any) => addCashSession(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cash_sessions'],
      });
    },
  });
};
