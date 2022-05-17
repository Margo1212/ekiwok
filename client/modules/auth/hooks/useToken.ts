import { useLocalStorage } from 'react-use';

export const useToken = () => useLocalStorage<string>('token');
