import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  private messages: string[] = [];

  addMessage(message: string): void {
    this.messages.push(message);
  }

  getMessages(): string[] {
    return this.messages;
  }
}
