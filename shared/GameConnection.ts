import { AuthorizationPayload } from "./Auth";
import { Game } from "./Game";

export type GameId = string;

export type CreateGameRequest = {
  hostName: string;
};

export type CreateGameResponse = {
  gameId: GameId;
} & AuthorizationPayload;

type BaseJoinGameRequest = {
  gameId: GameId;
};

export type JoinGameRequest = BaseJoinGameRequest & { name: string };

export type JoinGameResponse = AuthorizationPayload;

export type ConnectGameRequest = BaseJoinGameRequest & AuthorizationPayload;

export type ConnectGameResponse = Game;
