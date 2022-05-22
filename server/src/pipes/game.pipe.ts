import { Injectable, PipeTransform } from '@nestjs/common';
import { BaseGameRequest, User } from '@shared';
import { Game } from 'src/logic/Game';
import { GameRoomService } from 'src/services/game-room.service';
import { UserService } from 'src/services/user.service';

export type ExtendedRequest<T> = T & { user: User; game: Game };

@Injectable()
export class GameByIdPipe implements PipeTransform {
  constructor(private userService: UserService, private gameRoomService: GameRoomService) {}

  transform(request: BaseGameRequest) {
    const { gameId, token } = request;
    const user = this.userService.getUser(token);
    const game = this.gameRoomService.findGame(gameId);

    return { ...request, user, game };
  }
}
