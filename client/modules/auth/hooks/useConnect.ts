import { ConnectGameRequest, ConnectGameResponse, Game } from '@shared';
import { useGameId } from 'modules/common/hooks/useGameId';
import { useEffect, useState } from 'react';

import { useEmit } from './useEmit';

export const useConnect = () => {
  const [game, setGame] = useState<Game | null>(null);
  const connectToGame = useEmit<ConnectGameRequest, ConnectGameResponse>('game-connect');
  const gameId = useGameId();

  useEffect(() => {
    if (!gameId) return;
    connectToGame({ gameId }).then(setGame);
  }, [gameId, connectToGame]);

  return game;
};
