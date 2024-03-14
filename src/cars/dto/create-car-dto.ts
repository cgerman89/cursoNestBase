import { IsString, MinLength } from "class-validator";

export class CreateCarDto {

    @IsString({ message:'debe ser un string' })
    readonly brand: string;

    @IsString({ message:'debe ser un string' })
    @MinLength(3)
    readonly model: string;

}