import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('feed_post')
export class FeedPostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    body: string;

    @Column({ nullable: true })
    image: string;

    @CreateDateColumn()
    createdAt: Date;
}