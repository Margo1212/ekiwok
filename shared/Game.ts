import { Token } from "./Auth";
import { GameId } from "./GameConnection";
import { Message } from "./Message";
import { PlayerSerialized } from "./Player";
import { QuestionSerialized } from "./Question";

export type GameSerialized = {
  id: GameId;
  players: PlayerSerialized[];
  currentPlayer: PlayerSerialized;
  chat: Message[];
  question?: QuestionSerialized;
};

export type BaseGameRequest = {
  token: Token;
  gameId: GameId;
};

export type SendEmojiRequest = {
  emoji: string;
} & BaseGameRequest;

export type SendEmojiResponse = {};

export type NewRoundPayload = {
  currentPlayer: PlayerSerialized;
};

export type PointScoredPayload = {
  players: PlayerSerialized[];
};
