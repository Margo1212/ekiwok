import { Message } from '@shared';
import { useSubscribe } from 'modules/common/hooks/useSubscribe';

export const useNewMessage = () => useSubscribe<Message>('new-message');
