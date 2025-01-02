import { IsNotEmpty, IsNumber } from "class-validator";

export class GetPostByIdDto {
    @IsNumber()
    @IsNotEmpty()
    id: number
}