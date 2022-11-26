import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, IsEmail, IsNumber } from 'class-validator';

export class CreateTUserDto {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly apellido: string;

  @IsNumber()
  @IsNotEmpty()
  readonly cedula: number;

  @IsString()
  @IsNotEmpty()
  readonly rol: string;

  @IsNumber()
  @IsNotEmpty()
  readonly notasId: number;
}

export class UpdateUsersDto extends PartialType(CreateTUserDto) {}
