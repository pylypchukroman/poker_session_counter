import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCashSession } from '@/api/cashSession';

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
