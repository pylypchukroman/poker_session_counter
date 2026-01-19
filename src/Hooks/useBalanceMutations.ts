import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addBalance, deleteBalance, editBalance } from '@/api/balance';
import type { AddBalancePayload, AddBalanceResponse, EditBalancePayload, EditBalanceResponse } from '@/types/api';
import type { DeleteBalancePayload, DeleteBalanceResponse } from '@/types/api';

export const useEditBalance = () => {
  const queryClient = useQueryClient();

  return useMutation<EditBalanceResponse, Error, EditBalancePayload>({
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

  return useMutation<DeleteBalanceResponse, Error, DeleteBalancePayload>({
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

  return useMutation<AddBalanceResponse, Error, AddBalancePayload>({
    mutationFn: ({ body, token }) => addBalance({ body, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['balances'],
      });
    },
  });
};
