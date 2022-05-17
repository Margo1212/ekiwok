import { Card } from '../Card/Card';
import { Text } from '../Text/text';

type EmojiToGuessProps = {
  visibleEmojiCard: boolean;
};

const EmojiToGuess = ({ visibleEmojiCard }: EmojiToGuessProps) => {
  const isVisible = visibleEmojiCard === true ? 'block' : 'hidden';

  return (
    <div className={`${isVisible} mobile:grow mobile:m-7`}>
      <Card paddingX="md">
        <Text>Do zgadnięcia:</Text>
        <Text>Nie możesz użyć:</Text>
      </Card>
    </div>
  );
};

export { EmojiToGuess };
