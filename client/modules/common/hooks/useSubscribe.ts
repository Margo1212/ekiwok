import { Payload, ServerEvent } from '@shared';
import { useSocketEvent } from 'socket.io-react-hook';

import { useSocket } from './useSocket';

export const useSubscribe = <Response extends Payload>(event: ServerEvent): Response | undefined => {
  const { socket } = useSocket();
  const { lastMessage } = useSocketEvent<Response>(socket, event);

  return lastMessage;
};
