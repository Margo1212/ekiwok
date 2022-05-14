import { AuthorizationPayload } from "./Auth";
import { GameSerialized } from "./Game";
import { User } from "./User";

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

export type ConnectGameResponse = GameSerialized;

export type UserJoinedResponse = { users: User[] };
