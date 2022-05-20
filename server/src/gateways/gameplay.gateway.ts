import { WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { SendEmojiRequest, SendEmojiResponse } from '@shared';
import { SubscribeEvent } from 'src/common/SubscribeEvent';

@WebSocketGateway({ cors: true })
export class GameplayGateway {
  @SubscribeEvent('submit-emoji')
  handleNewEmoji(socket: Socket, request: SendEmojiRequest): SendEmojiResponse {
    return {};
  }
}
