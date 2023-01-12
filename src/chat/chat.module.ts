import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatRepository } from './repotiroies/chat.repository';
import { CustomTypeOrmModule } from '../common/modules/custom-typeorm.module';
import { ChatController } from './chat.controller';
import { ChatRedisService } from './redis/chat-redis.service';

@Module({
  imports: [CustomTypeOrmModule.forCustomEntityRepository([ChatRepository])],
  providers: [ChatService, ChatRedisService],
  controllers: [ChatController],
  exports: [ChatService],
})
export class ChatModule {}
