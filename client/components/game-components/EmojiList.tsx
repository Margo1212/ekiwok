import { Card } from '../Card/Card';
import { Text } from '../Text/text';

type EmojiListProps = {
  stretch: boolean;
};

const EmojiList = ({ stretch }: EmojiListProps) => {
  const isStretched = stretch === true ? 'col-span-2' : 'col-span-1';

  return (
    <div className={`${isStretched} mobile:hidden `}>
      <Card paddingX="sm">
        <Text>Kliknij aby wysłać:</Text>
      </Card>
    </div>
  );
};

export { EmojiList };
