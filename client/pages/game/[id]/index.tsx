import { useConnect } from 'modules/auth';
import { NextPage } from 'next';
import { SyntheticEvent, useState } from 'react';

import { Button } from '../../../components/Button/Button';
import { EmojiList } from '../../../components/game-components/EmojiList';
import { EmojiToGuess } from '../../../components/game-components/EmojiToGuess';
import { MessagesField } from '../../../components/game-components/MessagesField';
import { Users } from '../../../components/game-components/Users';
import { Navigation } from '../../../components/Navigation/Navigation';

const GamePage: NextPage = () => {
  const [view, setView] = useState({
    visibleEmojiCard: true,
    stretch: false,
  });

  const { visibleEmojiCard, stretch } = view;
  const game = useConnect();

  if (!game) return null;

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    setView({ visibleEmojiCard: false, stretch: true });
  };

  return (
    <div className="h-screen">
      <Navigation />
      <div className="h-88v grid grid-cols-3 grid-rows-2 gap-x-20 gap-y-12 px-12 py-8 mobile:flex mobile:flex-wrap mobile:h-full">
        <EmojiToGuess visibleEmojiCard={visibleEmojiCard} />
        <EmojiList stretch={stretch} />
        <MessagesField />
        <Users users={game.players} />
      </div>
      <Button text="Click me" onClick={handleClick} />
    </div>
  );
};

export default GamePage;
