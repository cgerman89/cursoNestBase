import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?:    string;

    @IsString({ message:'debe ser un string' })
    @IsOptional()
    readonly brand?: string;

    @IsString({ message:'debe ser un string' })
    @IsOptional()
    readonly model?: string;

}