import { ConnectGameRequest, ConnectGameResponse } from '@shared';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useEmit } from './useEmit';
import { useToken } from './useToken';

export const useConnect = () => {
  const [token] = useToken();
  const connectToGame = useEmit<ConnectGameRequest, ConnectGameResponse>('game-connect');
  const { query } = useRouter();
  const gameId = typeof query.id === 'string' ? query.id : '';

  useEffect(() => {
    if (!gameId || !token) return;
    connectToGame({ gameId, token });
  }, [gameId, token]);
};
