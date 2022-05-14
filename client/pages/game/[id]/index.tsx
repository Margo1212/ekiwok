import { Text } from 'components/Text/text';
import { useConnect } from 'modules/auth';
import { NextPage } from 'next';

const Game: NextPage = () => {
  const game = useConnect();

  if (!game) return null;

  return (
    <>
      {game.players.map(({ name, id }) => (
        <Text key={id}>{name}</Text>
      ))}
    </>
  );
};

export default Game;
