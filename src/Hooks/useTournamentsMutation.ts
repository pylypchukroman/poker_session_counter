import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTournament, deleteTournament, finishTournament } from '@/api/tournaments';

export const useDeleteTournament = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({runningSessionId, tournamentId}) => deleteTournament({runningSessionId, tournamentId}),
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
    mutationFn: (payload: any) => addTournament(payload),
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
