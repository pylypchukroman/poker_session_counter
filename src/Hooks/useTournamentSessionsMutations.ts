import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTournamentSession } from '@/api/tornamentSessions';

export const useDeleteTournamentSession = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteTournamentSession(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tournament_sessions'],
      });
    },
  });
};
