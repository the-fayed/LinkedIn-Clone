import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { Observable } from 'rxjs';

import { IFeedPost } from './models/post.interface';
import { FeedService } from './feed.service';
import {
  CreatePostDto,
  GetPostByIdDto,
  UpdatePostDto,
  DeletePostDto,
} from './dtos';

@Controller('feed')
export class FeedController {
    constructor(private readonly feedService: FeedService) {}

    @Post()
    create(@Body() createPostDto: CreatePostDto): Observable<IFeedPost> {
        return this.feedService.create(createPostDto);
    }

    @Get()
    findAll(): Observable<IFeedPost[]> {
        return this.feedService.findAll();
    }

    @Get(':id')
    findById(@Param('id') getPostByIdDto: GetPostByIdDto): Observable<IFeedPost> {
        return this.feedService.findById(getPostByIdDto.id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto): Observable<UpdateResult> {
        return this.feedService.update(id, updatePostDto);
    }

    @Delete(':id')
    delete(@Param('id') deletePostDto: DeletePostDto): void {
        this.feedService.delete(deletePostDto.id);
    }
}
