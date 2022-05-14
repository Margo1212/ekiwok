import { GameId } from "./GameConnection";
import { User } from "./User";

export type Game = {
  id: GameId;
  players: User[];
};
