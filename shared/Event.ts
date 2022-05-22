export type ClientEvent =
  | "game-join"
  | "game-connect"
  | "game-create"
  | "send-emoji";

export type ServerEvent =
  | "new-user"
  | "game-started"
  | "new-question"
  | "new-message"
  | "new-round";
