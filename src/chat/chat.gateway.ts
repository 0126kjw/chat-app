import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { ChatService } from './chat.service';

@WebSocketGateway()
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}

  @WebSocketServer() server: Server;

  @SubscribeMessage('chat')
  handleMessage(client: Socket, payload: any): void {
    this.chatService.addMessage(payload);
    this.server.emit('chat', payload);
  }

  @SubscribeMessage('getMessages')
  handleGetMessages(client: Socket): void {
    const messages = this.chatService.getMessages();
    client.emit('messages', messages);
  }

  handleConnection(client: Socket, ...args: any[]): any {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket): any {
    console.log(`Client disconnected: ${client.id}`);
  }
}
