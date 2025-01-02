import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';

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

  update(id: number, feedPost: Partial<IFeedPost>): Observable<UpdateResult> {
    return from(this.feedRepository.update(id, feedPost));
  }

  delete(id: number): void {
    this.feedRepository.delete(id);
  }
}
