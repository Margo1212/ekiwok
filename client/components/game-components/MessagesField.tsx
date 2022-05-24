import { Message } from '@shared';
import { Avatar } from 'components/Avatar/Avatar';
import { Emoji } from 'components/Emoji/emoji';
import { useNewMessage } from 'modules/gameplay/hooks/useNewMessage';
import { useEffect, useRef } from 'react';
import { useList } from 'react-use';

import { Card } from '../Card/Card';

export type MessagesFieldProps = {
  chat: Message[];
};

export const MessagesField = ({ chat }: MessagesFieldProps) => {
  const [messages, { push }] = useList(chat);
  const newMessage = useNewMessage();

  useEffect(() => {
    if (newMessage) push(newMessage);
  }, [newMessage?.id]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="row-span-2 mobile:basis-1/2 mobile:order-last mobile:grow">
      <Card paddingX="sm">
        <div className=" overflow-y-scroll h-full w-full scrollbar scrollbar-track-background scrollbar-thumb-border">
          {messages.map((m, i) => (
            <div
              ref={messagesEndRef}
              className={`w-80 m-5 border  rounded-2xl flex ${
                m.isHint ? 'flex-row-reverse border-border' : 'flex-row border-primary'
              } items-center`}
              key={i}
            >
              <Avatar size="sm" username={m.author.name} avatarNo={m.author.avatar} />
              <Emoji icon={m.content} size={'md'} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
