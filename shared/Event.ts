export type ClientEvent =
  | "game-join"
  | "game-connect"
  | "game-create"
  | "submit-emoji";

export type ServerEvent = "new-user" | "game-started";
