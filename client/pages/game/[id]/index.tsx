import { Text } from 'components/Text/text';
import { useConnect } from 'modules/auth';
import { useUserJoined } from 'modules/auth/hooks/useUserJoined';
import { NextPage } from 'next';

const GamePage: NextPage = () => {
  const game = useConnect();
  const payload = useUserJoined();

  if (!game) return null;

  const players = payload?.users?.length > 0 ? payload.users : game.players;

  return (
    <>
      {players.map(({ name, id }) => (
        <Text key={id}>{name}</Text>
      ))}
    </>
  );
};

export default GamePage;
