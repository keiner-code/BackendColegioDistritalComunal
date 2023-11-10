import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, IsEmail, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger/dist';

export class CreateTUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly apellido: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly cedula: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly rol: string;
}

export class UpdateUsersDto extends PartialType(CreateTUserDto) {}
