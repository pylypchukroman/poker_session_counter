import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTournament, deleteTournament, finishTournament } from '@/api/tournaments';

export const useDeleteTournament = () => {
  const queryClient = useQueryClient();

  return useMutation({
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

  return useMutation({
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

  return useMutation({
    mutationFn: ({ runningSessionId, tournamentId, result, accessToken }) =>
      finishTournament({ runningSessionId, tournamentId, result, accessToken }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tournaments'],
      });
    },
  });
};
