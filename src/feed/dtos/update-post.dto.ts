import { IsNotEmpty, IsString, Length } from "class-validator";

export class UpdatePostDto {
    @IsString()
    @IsNotEmpty()
    @Length(3, 3000, { message: 'Post body must be at least 3 characters long' })
    body: string
}