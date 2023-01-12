import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChatService } from './chat.service';
import { ParamGetChatDTO } from './dto/chat.dto';
import { ChatAO } from './ao/chat.ao';

@ApiTags('chats')
@Controller({ path: 'chats', version: '1' })
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get(':room')
  async getChatMessages(@Param() dto: ParamGetChatDTO): Promise<ChatAO[]> {
    const { room } = dto;
    const messageBOs = await this.chatService.getChatMessages(room);
    return ChatAO.plainManyToClass(messageBOs);
  }
}
