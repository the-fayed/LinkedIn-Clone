import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { FeedModule } from './feed/feed.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: <string>process.env.DB_HOST,
      port: parseInt(<string>process.env.DB_PORT),
      username: <string>process.env.DB_USERNAME,
      password: <string>process.env.DB_PASSWORD,
      database: <string>process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    FeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
