import { Message } from '@shared';
import { useNewMessage } from 'modules/gameplay/hooks/useNewMessage';
import { useEffect } from 'react';
import { useList } from 'react-use';

import { Card } from '../Card/Card';
import { Icon } from '../Icon/Icon';
import { Input } from '../Input/Input';

export type MessagesFieldProps = {
  chat: Message[];
};

export const MessagesField = ({ chat }: MessagesFieldProps) => {
  const [messages, { push }] = useList(chat);
  const newMessage = useNewMessage();

  useEffect(() => {
    if (newMessage) push(newMessage);
  }, [newMessage?.id]);

  return (
    <div className="row-span-2 mobile:basis-1/2 mobile:order-last mobile:grow">
      <Card paddingX="sm">
        {messages.map((m, i) => (
          <span key={i}>{m.content}</span>
        ))}
        <div className="w-full h-full flex items-end">
          <Input sizeOfInput="sm" iconPosition="right" icon={<Icon type={'emotikon'} size={'sm'} />} />
        </div>
      </Card>
    </div>
  );
};
