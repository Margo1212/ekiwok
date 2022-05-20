import { v4 as getUniqueId } from 'uuid';
import { GameId, GameSerialized, User } from '@shared';
import { Player } from './Player';

export class Game {
  private id: GameId;
  private players: Player[];
  private host: Player;
  private currentPlayerIndex: 0;

  constructor(host: User) {
    this.id = getUniqueId();
    this.players = [];
    this.host = new Player(host);
    this.currentPlayerIndex = 0;
    this.addPlayer(host);
  }

  addPlayer(user: User): void {
    const player = new Player(user);
    this.players.push(player);
  }

  compare(gameId: string): boolean {
    return this.id === gameId;
  }

  serialize(): GameSerialized {
    return { id: this.id, players: this.players.map((player) => player.serialize()) };
  }
}
