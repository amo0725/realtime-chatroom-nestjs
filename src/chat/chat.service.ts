import { Injectable } from '@nestjs/common';
import { ChatRepository } from './repotiroies/chat.repository';
import { BodyCreateChatDTO } from './dto/chat.dto';
import { ChatBO } from './bo/chat.bo';
import { ChatRedisService } from './redis/chat-redis.service';

@Injectable()
export class ChatService {
  constructor(
    private readonly chatRepository: ChatRepository,
    private readonly chatRedisService: ChatRedisService
  ) {}

  async createChatMessage(dto: BodyCreateChatDTO) {
    const { room } = dto;
    await this.chatRedisService.deleteChatRoomMessageKey(room);
    const message = await this.chatRepository.save(dto);
    return message;
  }

  async getChatMessages(room: string): Promise<ChatBO[]> {
    const messageEntities = await this.chatRepository.getChatMessages(room);
    return ChatBO.plainManyToClass(messageEntities);
  }
}
