import { A } from '@mobily/ts-belt';
import { Injectable } from '@nestjs/common';
import { GameSerialized, GameId, User } from '@shared';
import { Game } from 'src/logic/Game';

@Injectable()
export class GameRoomService {
  private games: Game[] = [];

  createGame(host: User): GameSerialized {
    const game = new Game(host);
    this.games.push(game);

    return game.serialize();
  }

  findGame(gameId: GameId) {
    return A.find(this.games, (game) => game.compare(gameId));
  }
}
