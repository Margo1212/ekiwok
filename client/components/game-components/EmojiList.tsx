import { listIcons } from '@iconify/react';
import { Emoji } from 'components/Emoji/emoji';

import { Card } from '../Card/Card';
import { Text } from '../Text/text';

type EmojiListProps = {
  stretch: boolean;
};

const EmojiList = ({ stretch }: EmojiListProps) => {
  const isStretched = stretch === true ? 'col-span-2' : 'col-span-1';
  const emojiArr = listIcons('', 'noto');

  return (
    <div className={`${isStretched} mobile:hidden`}>
      <Card paddingX="sm">
        <Text>Kliknij aby wysłać:</Text>
        <div className="flex flex-wrap">
          {emojiArr.map((emoji) => (
            <Emoji key={emoji} size="md" icon={emoji} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export { EmojiList };
