import { Injectable } from '@nestjs/common';
import { RedisService } from '@liaoliaots/nestjs-redis';
import * as IORedis from 'ioredis';
import { REDIS_CONSTANTS_KEY } from '../../common/constants/redis.constant';

@Injectable()
export class ChatRedisService {
  private readonly redis: IORedis.Redis;

  constructor(private readonly redisService: RedisService) {
    this.redis = this.redisService.getClient();
  }

  async deleteChatRoomMessageKey(room: string) {
    const key = REDIS_CONSTANTS_KEY.chat.CHAT_ROOM_MESSAGES_KEY(room);
    await this.redis.del(key);
  }
}
