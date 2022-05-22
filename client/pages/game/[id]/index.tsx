import { Button } from 'components/Button/Button';
import { EmojiList } from 'components/game-components/EmojiList';
import { EmojiToGuess } from 'components/game-components/EmojiToGuess';
import { MessagesField } from 'components/game-components/MessagesField';
import { Users } from 'components/game-components/Users';
import { Navigation } from 'components/Navigation/Navigation';
import { useConnect } from 'modules/auth';
import { NextPage } from 'next';
import { useState } from 'react';

const GamePage: NextPage = () => {
  const game = useConnect();

  const [isCurrentPlayer, setIsCurrentPlayer] = useState(false);

  const handleClick = () => {
    setIsCurrentPlayer(!isCurrentPlayer);
  };

  if (!game) return null;

  return (
    <div className="h-screen">
      <Navigation />
      <div className="h-88v grid grid-cols-3 grid-rows-2 gap-x-20 gap-y-12 px-12 py-8 mobile:flex mobile:flex-wrap mobile:h-full">
        <EmojiToGuess visibleEmojiCard={!isCurrentPlayer} />
        <EmojiList stretch={isCurrentPlayer} />
        <MessagesField chat={game.chat} />
        <Users users={game.players} />
      </div>
      <Button text="Click me" onClick={handleClick} />
    </div>
  );
};

export default GamePage;
