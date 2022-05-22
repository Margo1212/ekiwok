import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ConnectGameRequest, ConnectGameResponse, CreateGameRequest, CreateGameResponse, JoinGameRequest, JoinGameResponse } from '@shared';
import { UserService } from '../services/user.service';
import { SubscribeEvent } from '../common/SubscribeEvent';
import { GameRoomService } from 'src/services/game-room.service';

@WebSocketGateway({ cors: true })
export class ConnectionGateway {
  @WebSocketServer()
  server!: Server;

  constructor(private userService: UserService, private gameService: GameRoomService) {}

  @SubscribeEvent('game-create')
  createGame(socket: Socket, { hostName }: CreateGameRequest): CreateGameResponse {
    const host = this.userService.createUser(socket.id, hostName);
    const game = this.gameService.createGame(host, this.server);

    return { gameId: game.id, token: host.id };
  }

  @SubscribeEvent('game-join')
  joinGame(socket: Socket, { gameId, name }: JoinGameRequest): JoinGameResponse {
    const user = this.userService.createUser(socket.id, name);
    const game = this.gameService.findGame(gameId);

    if (!game) throw new Error('Nie ma takiej gry');

    game.addPlayer(user);
    const gameInfo = game.serialize(user.id);
    socket.to(gameInfo.id).emit('new-user', { users: gameInfo.players });

    return { token: user.id };
  }

  @SubscribeEvent('game-connect')
  connectToGame(socket: Socket, { gameId, token }: ConnectGameRequest): ConnectGameResponse {
    const user = this.userService.getUser(token);
    if (!user) throw new Error('Nie wiem kim jesteś');

    this.userService.assignSocketIdToUser(user.id, socket.id);
    const game = this.gameService.findGame(gameId);
    if (!game) throw new Error('Nie ma takiej gry');

    socket.join(gameId);

    return game.serialize(user.id);
  }
}
