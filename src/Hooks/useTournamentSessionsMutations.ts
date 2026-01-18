import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTournamentSession, deleteTournamentSession, finishTournamentSession } from '@/api/tornamentSessions';

export const useDeleteTournamentSession = () => {
  const queryClient = useQueryClient();

  return useMutation({
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

  return useMutation({
    mutationFn: (token: string | null) => addTournamentSession(token),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tournament_sessions'],
      });
    },
  });
};

export const useFinishTournamentSession = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, token }) => finishTournamentSession({ id, token }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tournament_sessions'],
      });
    },
  });
};
