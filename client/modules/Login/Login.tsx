import { Button } from '../../components/Logo/Button/Button';
import { useEvent } from '../../hooks/useEvent';

export const Login = () => {
  const { sendMessage } = useEvent('join-game');

  const joinGame = async () => {
    const a = await sendMessage('username');
    console.log('🚀 ~ file: Login.tsx ~ line 9 ~ joinGame ~ a', a);
  };

  return <Button text={'Send message'} onClick={joinGame} />;
};
