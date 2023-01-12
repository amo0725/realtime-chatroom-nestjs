import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from '../ormconfig';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { DataSource } from 'typeorm';
import { AppGateway } from './app.gateway';
import { ChatModule } from './chat/chat.module';
import { ChatEntity } from './chat/entities/Chat.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          ...typeormConfig,
          entities: [ChatEntity],
        };
      },
      async dataSourceFactory(options) {
        return addTransactionalDataSource(new DataSource(options));
      },
    }),
    ChatModule,
  ],
  providers: [AppGateway],
})
export class AppModule {}
