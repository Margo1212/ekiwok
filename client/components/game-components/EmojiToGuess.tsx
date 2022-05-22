import { Emoji } from 'components/Emoji/emoji';
import { useNewQuestion } from 'modules/gameplay/hooks/useNewQuestion';

import { Card } from '../Card/Card';
import { Text } from '../Text/text';

type EmojiToGuessProps = {
  visibleEmojiCard: boolean;
};

const EmojiToGuess = ({ visibleEmojiCard }: EmojiToGuessProps) => {
  const question = useNewQuestion();
  if (!question) return null;
  const isVisible = visibleEmojiCard === true ? 'block' : 'hidden';

  return (
    <div className={`${isVisible} mobile:grow mobile:m-7`}>
      <Card paddingX="md">
        <Text>Do zgadnięcia:</Text>
        <div>
          <Emoji icon={question.anwser} />
        </div>
        <Text>Nie możesz użyć:</Text>
        <div>
          {question.forbidden.map((icon) => (
            <Emoji key={icon} icon={icon} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export { EmojiToGuess };
