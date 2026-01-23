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
    mutationFn: ({ id }) => deleteCashSession({ id }),
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
    mutationFn: ({ body }) => addCashSession({ body }),
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
    mutationFn: ({ id, body  }) => finishCashSession({ id, body }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cash_sessions'],
      });
    },
  });
};
