import { User, PlayerSerialized } from '@shared';

export class Player {
  private readonly user: User;
  private score: number;

  constructor(user: User) {
    this.user = user;
    this.score = 0;
  }

  public get socketId(): string {
    return this.user.socketId;
  }

  serialize(): PlayerSerialized {
    return { id: this.user.id, name: this.user.name, score: this.score, socketId: this.user.socketId };
  }
}
