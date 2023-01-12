import { Repository } from 'typeorm';
import { CustomEntityRepository } from '../../common/decorators/custom-entity-repository.decorator';
import { ChatEntity } from '../entities/Chat.entity';
import {
  REDIS_CONSTANTS_KEY,
  REDIS_EXPIRATION_MILLISECONDS,
} from '../../common/constants/redis.constant';

@CustomEntityRepository(ChatEntity)
export class ChatRepository extends Repository<ChatEntity> {
  async getChatMessages(room: string) {
    if (room === undefined) {
      return [];
    }

    const messages = await this.find({
      where: {
        room,
      },
      order: {
        createdAt: 'ASC',
      },
      cache: {
        id: REDIS_CONSTANTS_KEY.chat.CHAT_ROOM_MESSAGES_KEY(room),
        milliseconds: REDIS_EXPIRATION_MILLISECONDS,
      },
    });
    return messages;
  }
}
