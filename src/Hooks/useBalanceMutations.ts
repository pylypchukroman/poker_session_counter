import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addBalance, deleteBalance, editBalance } from '@/api/balance';

export const useEditBalance = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, body, token }) => editBalance({ id, body, token }),
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
    mutationFn: ({ id, token }) => deleteBalance({ id, token}),
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
    mutationFn: ({ body, token }) => addBalance({ body, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['balances'],
      });
    },
  });
};
