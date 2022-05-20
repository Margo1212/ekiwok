import { User, PlayerSerialized } from '@shared';

export class Player {
  private id: string;
  private name: string;
  private score: number;
  private socketId: string;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.socketId = user.socketId;
    this.score = 0;
  }

  serialize(): PlayerSerialized {
    return { id: this.id, name: this.name, score: this.score, socketId: this.socketId };
  }
}
