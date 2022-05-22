import { SendEmojiRequest, SendEmojiResponse } from '@shared';
import { useEmit } from 'modules/auth/hooks/useEmit';

export const useSendEmoji = () => {
  const sendEmoji = useEmit<SendEmojiRequest, SendEmojiResponse>('send-emoji');

  return sendEmoji;
};
