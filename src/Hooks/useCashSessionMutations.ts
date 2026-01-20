import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addCashSession, deleteCashSession, finishCashSession } from '@/api/cashSession';
import type {
  AddCashSessionPayload,
  AddCashSessionResponse,
  DeleteCashSessionPayload,
  DeleteCashSessionResponse,
  FinishCashSessionPayload,
  FinishCashSessionResponse
} from '@/types';


export const useDeleteCashSession = () => {
  const queryClient = useQueryClient();

  return useMutation<DeleteCashSessionResponse, Error, DeleteCashSessionPayload>({
    mutationFn: ({ id, token }) => deleteCashSession({ id, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cash_sessions'],
      });
    },
  });
};

export const useAddCashSession = () => {
  const queryClient = useQueryClient();

  return useMutation<AddCashSessionResponse, Error, AddCashSessionPayload>({
    mutationFn: ({ body, token }) => addCashSession({ body, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cash_sessions'],
      });
    },
  });
};

export const useFinishCashSession = () => {
  const queryClient = useQueryClient();

  return useMutation<FinishCashSessionResponse, Error, FinishCashSessionPayload>({
    mutationFn: ({ id, body, token }) => finishCashSession({ id, body, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cash_sessions'],
      });
    },
  });
};
