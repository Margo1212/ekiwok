import { useSocket as useSocketIo } from 'socket.io-react-hook';

const backendURL = 'http://localhost:5001';

export const useSocket = () => useSocketIo(backendURL);
