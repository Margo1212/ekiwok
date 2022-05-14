import { ConnectGameRequest, ConnectGameResponse } from '@shared';
import { useGameId } from 'modules/common/hooks/useGameId';
import { useEffect } from 'react';

import { useEmit } from './useEmit';

export const useConnect = () => {
  const connectToGame = useEmit<ConnectGameRequest, ConnectGameResponse>('game-connect');
  const gameId = useGameId();

  useEffect(() => {
    if (!gameId) return;
    connectToGame({ gameId }).then(console.log);
  }, [gameId, connectToGame]);
};
