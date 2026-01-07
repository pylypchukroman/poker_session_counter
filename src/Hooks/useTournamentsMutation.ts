import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTournament, deleteTournament, finishTournament } from '@/api/tournaments';

export const useDeleteTournament = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteTournament(id),
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
    mutationFn: () => addTournament(),
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
    mutationFn: ({runningSessionId, tournamentId, result}) =>
      finishTournament({runningSessionId, tournamentId, result}),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tournaments'],
      });
    },
  });
};
