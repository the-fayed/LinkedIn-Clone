import { IsString, Length, IsNotEmpty, IsOptional } from "class-validator";


export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    @Length(3, 3000, { message: 'Post body must be at least 3 characters long' })
    body: string;

    @IsString()
    @IsOptional()
    image: string;
}