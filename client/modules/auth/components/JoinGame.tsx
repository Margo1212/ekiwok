import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { Text } from 'components/Text/text';
import { useState } from 'react';

import { useJoinGame } from '../hooks/useJoinGame';

export const JoinGame = () => {
  const [name, setName] = useState('');
  const joinTheGame = useJoinGame();

  const handleClick = () => {
    joinTheGame(name);
  };

  return (
    <div className="h-screen pt-48">
      <div className="flex justify-around items-center flex-col h-64 ">
        <Text>Podaj swój pseudonim</Text>
        <div className="max-w-md">
          <Input sizeOfInput="md" iconPosition="right" value={name} onChange={setName as any} />
        </div>
        <Button text="Dołącz do gry" onClick={handleClick} disabled={name.length < 1} />
      </div>
    </div>
  );
};
