import { QuestionSerialized } from '@shared';
import { useNewQuestion } from 'modules/gameplay/hooks/useNewQuestion';
import { useEffect, useState } from 'react';

import { EmojiList } from './EmojiList';
import { EmojiToGuess } from './EmojiToGuess';

export type EmojiPanelProps = {
  currentQuestion?: QuestionSerialized;
};

export const EmojiPanel = ({ currentQuestion }: EmojiPanelProps) => {
  const lastEmittedQuestion = useNewQuestion();
  const [question, setQuestion] = useState<QuestionSerialized | undefined>();

  useEffect(() => {
    setQuestion(lastEmittedQuestion);
  }, [currentQuestion?.id, lastEmittedQuestion?.id]);

  return (
    <>
      <EmojiToGuess question={question} />
      <EmojiList stretch={Boolean(question)} />
    </>
  );
};
