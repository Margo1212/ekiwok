import { CreateGameRequest, CreateGameResponse } from '@shared';
import { useRouter } from 'next/router';

import { useEmit } from './useEmit';
import { useToken } from './useToken';

export const useCreateGame = () => {
  const emit = useEmit<CreateGameRequest, CreateGameResponse>('game-create');
  const [, setToken] = useToken();
  const { push } = useRouter();

  const createGame = async (hostName: string) => {
    const { token, gameId } = await emit({ hostName });
    setToken(token);
    push(`/game/${gameId}`);
  };

  return createGame;
};
