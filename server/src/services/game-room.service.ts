import { A } from '@mobily/ts-belt';
import { Injectable } from '@nestjs/common';
import { GameSerialized, GameId, User } from '@shared';
import { Server } from 'socket.io';
import { Game } from 'src/logic/Game';

@Injectable()
export class GameRoomService {
  private games: Game[] = [];

  createGame(host: User, server: Server): GameSerialized {
    const game = new Game(host, server);
    this.games.push(game);

    return game.serialize(host.id);
  }

  findGame(gameId: GameId) {
    return A.find(this.games, (game) => game.compare(gameId));
  }
}
