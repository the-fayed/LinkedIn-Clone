import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { FeedService } from './feed.service';
import { IFeedPost } from './models/post.interface';
import { Observable } from 'rxjs';

@Controller('feed')
export class FeedController {
    constructor(private readonly feedService: FeedService) {}

    @Post()
    create(@Body() post: IFeedPost): Observable<IFeedPost> {
        return this.feedService.create(post);
    }

    @Get()
    findAll(): Observable<IFeedPost[]> {
        return this.feedService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number): Observable<IFeedPost> {
        return this.feedService.findById(id);
    }

    @Delete(':id')
    delete(@Param('id') id: number): void {
        this.feedService.delete(id);
    }
}
