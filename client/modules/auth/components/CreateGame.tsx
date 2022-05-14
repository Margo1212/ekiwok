import { Input } from 'components/Input/Input';
import { Button } from 'components/Logo/Button/Button';
import { useState } from 'react';

import { useCreateGame } from '../hooks/useCreateGame';

export const CreateGame = () => {
  const [name] = useState('Krzysztof Jarzyna');
  const createTheGame = useCreateGame();

  const handleClick = () => {
    createTheGame(name);
  };

  return (
    <>
      <Input sizeOfInput="md" iconPosition="right" />
      <Button text="Dołącz do gry" onClick={handleClick} />
    </>
  );
};
