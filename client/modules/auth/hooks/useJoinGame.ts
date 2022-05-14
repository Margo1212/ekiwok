import { JoinGameRequest, JoinGameResponse } from '@shared';
import { useGameId } from 'modules/common/hooks/useGameId';
import { useRouter } from 'next/router';

import { useEmit } from './useEmit';
import { useToken } from './useToken';

export const useJoinGame = () => {
  const emit = useEmit<JoinGameRequest, JoinGameResponse>('game-join');
  const gameId = useGameId();
  const [, setToken] = useToken();
  const { push } = useRouter();

  const joinGame = async (name: string) => {
    const { token } = await emit({ name, gameId });
    setToken(token);
    push(`/game/${gameId}`);
  };

  return joinGame;
};
