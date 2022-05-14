import { Event, Payload } from '@shared';
import { useSocketEvent } from 'socket.io-react-hook';

import { useSocket } from '../../auth/hooks/useSocket';

export const useSubscribe = <Response extends Payload>(event: Event) => {
  const { socket } = useSocket();
  const { lastMessage } = useSocketEvent<Response>(socket, event);

  return lastMessage;
};
