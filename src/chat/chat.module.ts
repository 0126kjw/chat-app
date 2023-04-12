import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { IoAdapter } from '@nestjs/platform-socket.io';

@Module({
  imports: [],
  providers: [ChatGateway, ChatService, IoAdapter],
})
export class ChatModule {}
