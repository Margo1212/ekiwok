import { Token } from "./Auth";
import { GameId } from "./GameConnection";
import { PlayerSerialized } from "./Player";

export type GameSerialized = {
  id: GameId;
  players: PlayerSerialized[];
  currentPlayer: PlayerSerialized;
};

export type BaseGameRequest = {
  token: Token;
  gameId: GameId;
};

export type SendEmojiRequest = {
  emoji: string;
} & BaseGameRequest;

export type SendEmojiResponse = {};
