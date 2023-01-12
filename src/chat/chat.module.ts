import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatRepository } from './repotiroies/chat.repository';
import { CustomTypeOrmModule } from '../common/modules/custom-typeorm.module';
import { ChatController } from './chat.controller';

@Module({
  imports: [CustomTypeOrmModule.forCustomEntityRepository([ChatRepository])],
  providers: [ChatService],
  controllers: [ChatController],
  exports: [ChatService],
})
export class ChatModule {}
