import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTournamentSession, deleteTournamentSession, finishTournamentSession } from '@/api/tornamentSessions';
import type {
  AddTournamentSessionResponse, DeleteTournamentSessionResponse, FinishTournamentSessionResponse
} from '@/types/api';
import type { FinishTournamentSessionPayload } from '@/types/api';
import type { DeleteTournamentSessionPayload } from '@/types/api';

export const useDeleteTournamentSession = () => {
  const queryClient = useQueryClient();

  return useMutation<DeleteTournamentSessionResponse, Error, DeleteTournamentSessionPayload>({
    mutationFn: ({ id, token }) => deleteTournamentSession({ id, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tournament_sessions'],
      });
    },
  });
};

export const useAddTournamentSession = () => {
  const queryClient = useQueryClient();

  return useMutation<AddTournamentSessionResponse, Error, string | null>({
    mutationFn: (token) => addTournamentSession(token),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tournament_sessions'],
      });
    },
  });
};

export const useFinishTournamentSession = () => {
  const queryClient = useQueryClient();

  return useMutation<FinishTournamentSessionResponse, Error, FinishTournamentSessionPayload>({
    mutationFn: ({ id, token }) => finishTournamentSession({ id, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tournament_sessions'],
      });
    },
  });
};
