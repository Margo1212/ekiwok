import { v4 as getUniqueId } from 'uuid';
import { GameId, GameSerialized, User } from '@shared';
import { Player } from './Player';
import { gameConfig } from 'src/config/game.config';
import { Question } from './Question';
import { Server } from 'socket.io';

export class Game {
  private id: GameId;
  private players: Player[];
  private question: Question;
  private currentPlayerIndex: 0;
  private server: Server;

  constructor(host: User, server: Server) {
    this.server = server;
    this.id = getUniqueId();
    this.question = new Question();
    this.players = [];
    this.currentPlayerIndex = 0;
    this.addPlayer(host);
  }

  addPlayer(user: User): void {
    const numberOfPlayers = this.players.length + 1;
    if (numberOfPlayers >= gameConfig.maxPlayers) throw new Error('Pokój jest pełny');
    if (numberOfPlayers >= gameConfig.playersRequiredToStartTheGame) this.startTheGame();
    const player = new Player(user);
    this.players.push(player);
  }

  compare(gameId: string): boolean {
    return this.id === gameId;
  }

  serialize(): GameSerialized {
    return {
      id: this.id,
      players: this.players.map((player) => player.serialize()),
      currentPlayer: this.currentPlayer.serialize(),
    };
  }

  private get currentPlayer(): Player {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.players[this.currentPlayerIndex]!;
  }

  private sendQuestion(): void {
    this.server.to(this.currentPlayer.socketId).emit('new-question', this.question.serialize());
  }

  private startTheGame(): void {
    setTimeout(() => {
      this.server.in(this.id).emit('game-started', {});
      this.sendQuestion();
    }, 3000);
  }
}
