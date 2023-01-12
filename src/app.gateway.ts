import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat/chat.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly chatService: ChatService) {}
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');

  afterInit() {
    this.logger.log('Initialized');
  }

  @SubscribeMessage('messageToServer')
  async handleMessage(
    client: Socket,
    payload: { from: string; message: string; to: string; room: string }
  ): Promise<void> {
    await this.chatService.createChatMessage(payload);
    this.server.to(payload.room).emit('messageToClient', payload);
  }

  @SubscribeMessage('joinRoom')
  async handleJoinRoom(client: Socket, room: string): Promise<void> {
    client.join(room);
    client.emit('joinedRoom', room);
  }

  @SubscribeMessage('leaveRoom')
  async handleLeaveRoom(client: Socket, room: string): Promise<void> {
    client.leave(room);
    client.emit('leftRoom', room);
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
