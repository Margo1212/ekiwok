import { User } from "./User";

export type Score = number;

export type PlayerSerialized = User & { score: Score };
