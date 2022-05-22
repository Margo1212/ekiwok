/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { v4 as getUniqueId } from 'uuid';
import { GameId, GameSerialized, User, ServerEvent, Payload } from '@shared';
import { Player } from './Player';
import { gameConfig } from 'src/config/game.config';
import { Question } from './Question';
import { Server } from 'socket.io';
import { Chat } from './Chat';

export class Game {
  private id: GameId;
  private question: Question;
  private currentPlayerIndex: 0;
  private readonly players: Player[];
  private readonly server: Server;
  private readonly chat: Chat;

  constructor(host: User, server: Server) {
    this.server = server;
    this.id = getUniqueId();
    this.question = new Question();
    this.players = [];
    this.currentPlayerIndex = 0;
    this.addPlayer(host);
    this.chat = new Chat();
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
      chat: this.chat.serialize(),
    };
  }

  handleNewEmoji(sender: User, emoji: string) {
    if (this.currentPlayer.compare(sender.id)) {
      this.addNewHint(emoji);
      return;
    }
    this.addNewGuess(this.findPlayer(sender.id), emoji);
  }

  private addNewHint(emoji: string): void {
    if (this.question.isForbidden(emoji)) return;
    const message = this.chat.sendMessage(emoji, this.currentPlayer.serialize(), true);
    this.emitEvent('new-message', message);
  }

  private addNewGuess(sender: Player, emoji: string) {
    const message = this.chat.sendMessage(emoji, sender.serialize());
    this.emitEvent('new-message', message);

    if (this.question.isCorrect(emoji)) {
      console.log('Correct! Go to next turn');
      return;
    }

    console.log('Wrong');
  }

  private sendQuestion(): void {
    this.server.to(this.currentPlayer.socketId).emit('new-question', this.question.serialize());
  }

  private startTheGame(): void {
    setTimeout(() => {
      this.emitEvent('game-started');
      this.sendQuestion();
    }, 3000);
  }

  private emitEvent(event: ServerEvent, payload: Payload = {}) {
    this.server.in(this.id).emit(event, payload);
  }

  private get currentPlayer(): Player {
    return this.players[this.currentPlayerIndex]!;
  }

  private findPlayer(id: string): Player {
    return this.players.find((player) => player.compare(id))!;
  }
}
