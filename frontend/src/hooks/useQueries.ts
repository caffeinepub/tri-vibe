import { useMutation } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubscribeEmail() {
  const { actor } = useActor();

  return useMutation<boolean, Error, string>({
    mutationFn: async (email: string) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.subscribeEmail(email);
    },
  });
}
