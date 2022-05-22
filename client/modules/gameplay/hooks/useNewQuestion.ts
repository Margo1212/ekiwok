import { QuestionSerialized } from '@shared';
import { useSubscribe } from 'modules/common/hooks/useSubscribe';

export const useNewQuestion = () => useSubscribe<QuestionSerialized>('new-question');
