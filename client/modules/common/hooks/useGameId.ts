import { useRouter } from 'next/router';

export const useGameId = () => {
  const { query } = useRouter();
  const id = typeof query.id === 'string' ? query.id : '';

  return id;
};
