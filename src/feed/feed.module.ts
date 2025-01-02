import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FeedPostEntity } from './models/post.entity';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([FeedPostEntity])
  ],
  providers: [FeedService],
  controllers: [FeedController]
})
export class FeedModule {}
