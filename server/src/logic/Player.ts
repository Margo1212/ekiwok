import { PlayerSerialized, User } from '@shared';

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

  compare(id: string): boolean {
    return this.user.id === id;
  }

  serialize(): PlayerSerialized {
    return { id: this.user.id, name: this.user.name, score: this.score, socketId: this.user.socketId };
  }
}
