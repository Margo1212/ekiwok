import { allowedEmojis } from 'modules/gameplay/assets/allowedEmojis';
import { useEffect, useState } from 'react';

import { Card } from '../Card/Card';
import { Text } from '../Text/text';
import { EmojiButton } from './EmojiButton';

type EmojiListProps = {
  stretch: boolean;
};

const EmojiList = ({ stretch }: EmojiListProps) => {
  const [disabled, setDisabled] = useState(false);
  const isStretched = stretch === true ? 'col-span-2' : 'col-span-1';

  useEffect(() => {
    if (disabled) {
      setTimeout(() => setDisabled(false), 3000);
    }
  }, [disabled]);

  return (
    <div className={`${isStretched} mobile:hidden h-100 `}>
      <Card paddingX="sm">
        <Text>Kliknij aby wysłać:</Text>
        <div className="flex flex-wrap justify-center">
          {allowedEmojis.map((icon) => (
            <EmojiButton key={icon} icon={icon} onClick={() => setDisabled(true)} disabled={disabled} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export { EmojiList };
