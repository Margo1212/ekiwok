import { AuthorizationPayload, Event, Payload } from '@shared';
import { useCallback } from 'react';

import { useSocket } from './useSocket';
import { useToken } from './useToken';

export const useEmit = <Request extends Payload, Response extends Payload>(event: Event) => {
  const { socket } = useSocket();
  const [token] = useToken();

  const emitEvent = (payload: Omit<Request, keyof AuthorizationPayload>) =>
    new Promise<Response>((resolve) => {
      const payloadWithToken = token ? { ...payload, token } : payload;

      socket.emit(event, payloadWithToken, (response: Response) => {
        resolve(response);
      });
    });

  return useCallback(emitEvent, [socket, token, event]);
};
