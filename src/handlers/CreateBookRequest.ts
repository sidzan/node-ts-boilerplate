import {IsString} from "class-validator";

export class CreateBookHandlerRequest {
    @IsString()
    name!: string;

    @IsString()
    author!:string;
}
