import { Input } from 'components/Input/Input';
import { Button } from 'components/Logo/Button/Button';
import { useState } from 'react';

import { useJoinGame } from '../hooks/useJoinGame';

export const JoinGame = () => {
  const [name] = useState('Krzysztof Jarzyna');
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
