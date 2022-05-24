import { QuestionSerialized } from '@shared';
import { Emoji } from 'components/Emoji/emoji';

import { Card } from '../Card/Card';
import { Text } from '../Text/text';

type EmojiToGuessProps = {
  question?: QuestionSerialized;
};

const EmojiToGuess = ({ question }: EmojiToGuessProps) => {
  if (!question) return null;

  return (
    <div className={`mobile:grow mobile:m-7`}>
      <Card paddingX="md">
        <Text>Do zgadnięcia:</Text>
        <div>
          <Emoji icon={question.anwser} size="lg" />
        </div>
        <Text>Nie możesz użyć:</Text>
        <div>
          {question.forbidden.map((icon) => (
            <Emoji key={icon} icon={icon} size="lg" />
          ))}
        </div>
      </Card>
    </div>
  );
};

export { EmojiToGuess };
