import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from '../ormconfig';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { DataSource } from 'typeorm';
import { AppGateway } from './app.gateway';
import { ChatModule } from './chat/chat.module';
import { ChatEntity } from './chat/entities/Chat.entity';
import { redisConfig } from '../redisconfig';
import { RedisModule } from '@liaoliaots/nestjs-redis';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          ...typeormConfig,
          cache: {
            type: 'redis',
            options: {
              ...redisConfig,
            },
          },
          entities: [ChatEntity],
        };
      },
      async dataSourceFactory(options) {
        return addTransactionalDataSource(new DataSource(options));
      },
    }),
    RedisModule.forRoot({
      config: {
        ...redisConfig,
      },
    }),
    ChatModule,
  ],
  providers: [AppGateway],
})
export class AppModule {}
