import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTournament, deleteTournament, finishTournament } from '@/api/tournaments';
import type {
  AddTournamentPayload,
  AddTournamentResponse,
  DeleteTournamentPayload,
  DeleteTournamentResponse, FinishTournamentPayload, FinishTournamentResponse
} from '@/types/api';

export const useDeleteTournament = () => {
  const queryClient = useQueryClient();

  return useMutation<DeleteTournamentResponse, Error, DeleteTournamentPayload>({
    mutationFn: ({ runningSessionId, tournamentId, token }) => deleteTournament({ runningSessionId, tournamentId, token }),
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
    mutationFn: ({ body, token }) => addTournament({ body, token }),
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
    mutationFn: ({ runningSessionId, tournamentId, result, accessToken }) =>
      finishTournament({ runningSessionId, tournamentId, result, accessToken }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tournaments'],
      });
    },
  });
};
