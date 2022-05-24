import { EmojiPanel } from 'components/game-components/EmojiPanel';
import { MessagesField } from 'components/game-components/MessagesField';
import { Users } from 'components/game-components/Users';
import { Navigation } from 'components/Navigation/Navigation';
import { useConnect } from 'modules/auth';
import { NextPage } from 'next';

const GamePage: NextPage = () => {
  const game = useConnect();

  if (!game) return null;

  return (
    <div className="h-screen">
      <Navigation />
      <div className="h-88v grid grid-cols-3 grid-rows-2 gap-x-20 gap-y-12 px-12 py-8 mobile:flex mobile:flex-wrap mobile:h-full">
        <EmojiPanel currentQuestion={game.question} />
        <MessagesField chat={game.chat} />
        <Users users={game.players} currentPlayer={game.currentPlayer} />
      </div>
    </div>
  );
};

export default GamePage;
