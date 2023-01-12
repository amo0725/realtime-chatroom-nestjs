import { Repository } from 'typeorm';
import { CustomEntityRepository } from '../../common/decorators/custom-entity-repository.decorator';
import { ChatEntity } from '../entities/Chat.entity';

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
    });
    return messages;
  }
}
