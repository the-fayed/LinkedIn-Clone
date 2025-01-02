import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';

import { FeedPostEntity } from './models/post.entity';
import { IFeedPost } from './models/post.interface';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedRepository: Repository<FeedPostEntity>,
  ) {}

  create(feedPost: IFeedPost): Observable<IFeedPost> {
    return from(this.feedRepository.save(feedPost));
  }

  findAll(): Observable<IFeedPost[]> {
    return from(this.feedRepository.find());
  }

  findById(id: number): Observable<IFeedPost> {
    return from(this.feedRepository.findOneBy({ id }));
  }

  delete(id: number): void {
    this.feedRepository.delete(id);
  }
}
