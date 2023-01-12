import { Injectable } from '@nestjs/common';
import { ChatRepository } from './repotiroies/chat.repository';
import { BodyCreateChatDTO } from './dto/chat.dto';
import { ChatBO } from './bo/chat.bo';

@Injectable()
export class ChatService {
  constructor(private readonly chatRepository: ChatRepository) {}

  async createChatMessage(dto: BodyCreateChatDTO) {
    const message = await this.chatRepository.save(dto);
    return message;
  }

  async getChatMessages(room: string): Promise<ChatBO[]> {
    const messageEntities = await this.chatRepository.getChatMessages(room);
    return ChatBO.plainManyToClass(messageEntities);
  }
}
