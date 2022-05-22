import { A, O, pipe } from '@mobily/ts-belt';
import { QuestionSerialized } from '@shared';
import { emojis } from 'src/config/emojis.config';

export class Question {
  private readonly anwser: string;
  private readonly forbidden: readonly string[];

  constructor() {
    const category = emojis['Smileys & Emotion'];
    const [anwser, forbiddenEmojis] = pipe(category, A.shuffle, A.take(4), A.splitAt(1), O.getExn);
    this.anwser = pipe(anwser, A.get(0), O.getExn);
    this.forbidden = forbiddenEmojis;
  }

  isCorrect(guess: string): boolean {
    return this.anwser === guess;
  }

  isForbidden(guess: string): boolean {
    return A.includes(this.forbidden, guess);
  }

  serialize(): QuestionSerialized {
    return {
      anwser: this.anwser,
      forbidden: [...this.forbidden],
    };
  }
}
