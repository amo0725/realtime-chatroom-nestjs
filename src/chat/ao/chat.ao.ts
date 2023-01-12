import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToInstance } from 'class-transformer';
import { ChatBO } from '../bo/chat.bo';

export class ChatAO {
  @Expose()
  @ApiProperty()
  from: string;

  @Expose()
  @ApiProperty()
  text: string;

  @Expose()
  @ApiProperty()
  to: string;

  @Expose()
  @ApiProperty()
  room: string;

  static plainToClass(dto: ChatBO) {
    return (
      dto && plainToInstance(ChatAO, dto, { excludeExtraneousValues: true })
    );
  }

  static plainManyToClass(dto: ChatBO[]): ChatAO[] {
    return plainToInstance(ChatAO, dto, {
      excludeExtraneousValues: true,
    });
  }
}
