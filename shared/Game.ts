import { Token } from "./Auth";
import { GameId } from "./GameConnection";
import { Message } from "./Message";
import { PlayerSerialized } from "./Player";

export type GameSerialized = {
  id: GameId;
  players: PlayerSerialized[];
  currentPlayer: PlayerSerialized;
  chat: Message[];
};

export type BaseGameRequest = {
  token: Token;
  gameId: GameId;
};

export type SendEmojiRequest = {
  emoji: string;
} & BaseGameRequest;

export type SendEmojiResponse = {};
