import { PlayerSerialized } from ".";

export type Message = {
  author: PlayerSerialized;
  isHint: boolean;
  content: string;
};
