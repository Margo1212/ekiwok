import { createContext, FC, ReactNode, useContext } from 'react';
import { useSocket as useSocketIo } from 'socket.io-react-hook';

const backendURL = 'http://localhost:5001';

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
