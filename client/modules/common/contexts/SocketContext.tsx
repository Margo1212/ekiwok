import { createContext, FC, ReactNode, useContext } from 'react';
import { useSocket as useSocketIo } from 'socket.io-react-hook';

const backendURL = process.env.NEXT_PUBLIC_SERVER_URL || 'https://ekiwok.onrender.com/';

export type SocketConxtextValue = {
  socket: ReturnType<typeof useSocketIo>['socket'];
};

const SocketContext = createContext<SocketConxtextValue>(null as any);

const SocketContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { socket } = useSocketIo(backendURL);

  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};

const useSocketContextProvider = () => useContext(SocketContext);

export { SocketContextProvider, useSocketContextProvider };
