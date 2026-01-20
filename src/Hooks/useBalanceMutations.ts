import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addBalance, deleteBalance, editBalance } from '@/api/balance';
import type {
  AddBalancePayload,
  AddBalanceResponse,
  DeleteBalancePayload,
  DeleteBalanceResponse,
  EditBalancePayload,
  EditBalanceResponse,
  Room
} from '@/types';


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
  const queryClient = useQueryClient()

  return useMutation<DeleteBalanceResponse, Error, DeleteBalancePayload>({
    mutationFn: deleteBalance,

    onSuccess: (_, { id }) => {
      queryClient.setQueryData<Room[]>(
        ['balances'],
        (old) => old?.filter(balance => balance.id !== id)
      )
    },
  })
}

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
