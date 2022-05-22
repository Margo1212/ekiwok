import { QuestionSerialized } from '@shared';
import { useNewQuestion } from 'modules/gameplay/hooks/useNewQuestion';
import { useNewRound } from 'modules/gameplay/hooks/useNewRound';
import { useEffect, useState } from 'react';

import { EmojiList } from './EmojiList';
import { EmojiToGuess } from './EmojiToGuess';

export type EmojiPanelProps = {
  currentQuestion?: QuestionSerialized;
};

export const EmojiPanel = ({ currentQuestion }: EmojiPanelProps) => {
  const lastEmittedQuestion = useNewQuestion();
  const newRoundPayload = useNewRound();
  const [question, setQuestion] = useState<QuestionSerialized | undefined>(currentQuestion);

  useEffect(() => {
    setQuestion(undefined);
  }, [newRoundPayload?.currentPlayer.id]);

  useEffect(() => {
    setQuestion(lastEmittedQuestion ?? currentQuestion);
  }, [lastEmittedQuestion?.id]);

  return (
    <>
      <EmojiToGuess question={question} />
      <EmojiList stretch={Boolean(!question)} />
    </>
  );
};
