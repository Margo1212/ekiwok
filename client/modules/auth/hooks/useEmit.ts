import { BaseGameRequest, ClientEvent, Payload } from '@shared';
import { useGameId } from 'modules/common/hooks/useGameId';
import { useCallback } from 'react';

import { useSocket } from '../../common/hooks/useSocket';
import { useToken } from './useToken';

export const useEmit = <Request extends Payload, Response extends Payload>(event: ClientEvent) => {
  const { socket } = useSocket();
  const [token] = useToken();
  const gameId = useGameId();

  const emitEvent = (payload: Omit<Request, keyof BaseGameRequest>) =>
    new Promise<Response>((resolve) => {
      const authPayload = token ? { ...payload, token } : payload;
      const extendedPayload = gameId ? { ...authPayload, gameId } : authPayload;

      socket.emit(event, extendedPayload, (response: Response) => {
        resolve(response);
      });
    });

  return useCallback(emitEvent, [socket, token, gameId, event]);
};
