import { Events } from '@shared';
import { useSocket as useSocketIo, useSocketEvent } from 'socket.io-react-hook';

const useSocket = () => useSocketIo('http://localhost:5001');

export const useEvent = (event: Events) => {
  const { socket } = useSocket();
  const { lastMessage } = useSocketEvent(socket, event);

  const sendMessage = <Response = unknown>(payload: unknown) =>
    new Promise<Response>((resolve) => {
      socket.emit(event, payload, (response: Response) => {
        resolve(response);
      });
    });

  return { lastMessage, sendMessage };
};
