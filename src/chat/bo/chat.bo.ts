import { Expose, plainToInstance } from 'class-transformer';
import { IChatBase } from '../interfaces/chat.interface';
import { ChatEntity } from '../entities/Chat.entity';

class ChatBase implements IChatBase {
  @Expose()
  id: string;

  @Expose()
  from: string;

  @Expose()
  text: string;

  @Expose()
  to: string;

  @Expose()
  room: string;

  @Expose()
  createAt: string;

  @Expose()
  updateAt: string;

  @Expose()
  version: number;
}

export class ChatBO extends ChatBase {
  static plainToClass(dto: ChatEntity) {
    return (
      dto && plainToInstance(ChatBO, dto, { excludeExtraneousValues: true })
    );
  }

  static plainManyToClass(dto: ChatEntity[]): ChatBO[] {
    return plainToInstance(ChatBO, dto, {
      excludeExtraneousValues: true,
    });
  }
}
