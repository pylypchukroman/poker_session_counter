import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTournament, deleteTournament, finishTournament } from '@/api/tournaments';
import type {
  AddTournamentPayload,
  AddTournamentResponse,
  DeleteTournamentPayload,
  DeleteTournamentResponse,
  FinishTournamentPayload,
  FinishTournamentResponse
} from '@/types';

export const useDeleteTournament = () => {
  const queryClient = useQueryClient();

  return useMutation<DeleteTournamentResponse, Error, DeleteTournamentPayload>({
    mutationFn: ({ runningSessionId, tournamentId }) => deleteTournament({ runningSessionId, tournamentId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tournaments'],
      });
    },
  });
};

export const useAddTournament = () => {
  const queryClient = useQueryClient();

  return useMutation<AddTournamentResponse, Error, AddTournamentPayload>({
    mutationFn: ({ body }) => addTournament({ body }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tournaments'],
      });
    },
  });
};

export const useFinishTournament = () => {
  const queryClient = useQueryClient();

  return useMutation<FinishTournamentResponse, Error, FinishTournamentPayload>({
    mutationFn: ({ runningSessionId, tournamentId, result  }) =>
      finishTournament({ runningSessionId, tournamentId, result }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tournaments'],
      });
    },
  });
};
