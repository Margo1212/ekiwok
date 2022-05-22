import { Message, PlayerSerialized } from '@shared';

export class Chat {
  private messages: Message[] = [];

  sendMessage(content: string, author: PlayerSerialized, isHint = false): Message {
    const message: Message = { content, author, isHint };
    this.messages.push(message);
    return message;
  }

  serialize() {
    return [...this.messages];
  }
}
