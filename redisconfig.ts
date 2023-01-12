import { RedisClientOptions } from '@liaoliaots/nestjs-redis';
const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = process.env;

export const redisConfig: RedisClientOptions = {
  url: `redis://:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}`,
};
