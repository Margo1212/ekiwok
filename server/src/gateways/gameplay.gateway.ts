import { MessageBody, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { SendEmojiRequest, SendEmojiResponse } from '@shared';
import { SubscribeEvent } from 'src/common/SubscribeEvent';
import { GameByIdPipe } from 'src/pipes/game.pipe';

@WebSocketGateway({ cors: true })
export class GameplayGateway {
  @SubscribeEvent('send-emoji')
  handleNewEmoji(socket: Socket, @MessageBody(GameByIdPipe) request: SendEmojiRequest): SendEmojiResponse {
    console.log('🚀 ~ file: gameplay.gateway.ts ~ line 12 ~ GameplayGateway ~ handleNewEmoji ~ request', request);
    return {};
  }
}
