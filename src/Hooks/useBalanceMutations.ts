import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addBalance, deleteBalance, editBalance } from '@/api/balance';

export const useEditBalance = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, body }) => editBalance({ id, body }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['balances'],
      });
    },
  });
};

export const useDeleteBalance = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteBalance(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['balances'],
      });
    },
  });
};

export const useAddBalance = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: any) => addBalance(body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['balances'],
      });
    },
  });
};
