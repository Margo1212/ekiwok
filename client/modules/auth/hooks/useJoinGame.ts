import { JoinGameRequest, JoinGameResponse } from '@shared';

import { useEmit } from './useEmit';

export const useJoinGame = () => useEmit<JoinGameRequest, JoinGameResponse>('game-join');
