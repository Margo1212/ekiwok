import { SyntheticEvent, useState } from 'react';

import { Button } from '../components/Button/Button';
import { EmojiList } from '../components/game-components/EmojiList';
import { EmojiToGuess } from '../components/game-components/EmojiToGuess';
import { MessagesField } from '../components/game-components/MessagesField';
import { Users } from '../components/game-components/Users';
import { Navigation } from '../components/Navigation/Navigation';

const Game = () => {
  const [visibleEmojiCard, setVisibleEmojiCard] = useState<boolean>(true);
  const [stretch, setStretch] = useState<boolean>(false);

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    setStretch(true);
    setVisibleEmojiCard(false);
  };

  return (
    <div className="h-screen">
      <Navigation />
      <div className="h-88v grid grid-cols-3 grid-rows-2 gap-x-20 gap-y-12 px-12 py-8 mobile:flex mobile:flex-wrap mobile:h-full">
        <EmojiToGuess visibleEmojiCard={visibleEmojiCard} />
        <EmojiList stretch={stretch} />
        <MessagesField />
        <Users />
      </div>
      <Button text="Click me" onClick={handleClick} />
    </div>
  );
};

export default Game;
