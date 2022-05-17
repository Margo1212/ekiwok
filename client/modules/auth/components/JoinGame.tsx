import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { useState } from 'react';

import { useJoinGame } from '../hooks/useJoinGame';

export const JoinGame = () => {
  const [name] = useState('Jan Kowalski');
  const joinTheGame = useJoinGame();

  const handleClick = () => {
    joinTheGame(name);
  };

  return (
    <>
      <Input sizeOfInput="md" iconPosition="right" />
      <Button text="Dołącz do gry" onClick={handleClick} />
    </>
  );
};
