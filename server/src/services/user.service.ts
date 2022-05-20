import { A, Option, R } from '@mobily/ts-belt';
import { Injectable } from '@nestjs/common';
import { v4 as getUniqueId } from 'uuid';
import { User } from '@shared';
import { OperationResult } from 'src/typings';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  createUser(socketId: string, name: string): User {
    const user = {
      id: getUniqueId(),
      name: name,
      socketId,
    };

    this.users.push(user);

    return user;
  }

  getUser(id: string): Option<User> {
    return A.find(this.users, (user) => user.id === id);
  }

  assignSocketIdToUser(userId: string, socketId: string): OperationResult {
    const user = this.getUser(userId);
    if (!user) return R.Error('User not found');
    user.socketId = socketId;

    return R.Ok('OK');
  }
}
