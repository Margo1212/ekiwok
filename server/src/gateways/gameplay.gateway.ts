import { MessageBody, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { SendEmojiRequest, SendEmojiResponse } from '@shared';
import { SubscribeEvent } from 'src/common/SubscribeEvent';
import { ExtendedRequest, GameByIdPipe } from 'src/pipes/game.pipe';

@WebSocketGateway({ cors: true })
export class GameplayGateway {
  @SubscribeEvent('send-emoji')
  handleNewEmoji(socket: Socket, @MessageBody(GameByIdPipe) request: ExtendedRequest<SendEmojiRequest>): SendEmojiResponse {
    const { game, user, emoji } = request;
    game.handleNewEmoji(user, emoji);

    return {};
  }
}
