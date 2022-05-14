import { User } from "./User";

export type Score = number;

export type Player = User & { score: Score };
