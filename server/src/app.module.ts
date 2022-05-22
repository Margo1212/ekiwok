import { Module } from '@nestjs/common';
import { ConnectionGateway } from './gateways/connection.gateway';
import { UserService } from './services/user.service';
import { GameRoomService } from './services/game-room.service';
import { GameplayGateway } from './gateways/gameplay.gateway';

@Module({
  imports: [],
  providers: [ConnectionGateway, GameplayGateway, UserService, GameRoomService],
})
export class AppModule {}
