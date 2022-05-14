import { ConnectGameRequest, ConnectGameResponse } from '@shared';
import { useGameId } from 'modules/common/hooks/useGameId';
import { useEffect } from 'react';

import { useEmit } from './useEmit';
import { useToken } from './useToken';

export const useConnect = () => {
  const [token] = useToken();
  const connectToGame = useEmit<ConnectGameRequest, ConnectGameResponse>('game-connect');
  const gameId = useGameId();

  useEffect(() => {
    if (!gameId || !token) return;
    connectToGame({ gameId, token });
  }, [gameId, token]);
};
