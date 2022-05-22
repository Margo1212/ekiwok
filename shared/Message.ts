import { PlayerSerialized } from ".";

export type Message = {
  id: string;
  author: PlayerSerialized;
  isHint: boolean;
  content: string;
};
