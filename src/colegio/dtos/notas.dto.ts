import { IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateNotasDto {
  @IsNumber()
  @IsNotEmpty()
  readonly nota1: number;

  @IsNumber()
  @IsNotEmpty()
  readonly nota2: number;

  @IsNumber()
  @IsNotEmpty()
  readonly nota3: number;

  @IsNumber()
  @IsNotEmpty()
  readonly userId: number;
}

export class UpdateNotasDto extends PartialType(CreateNotasDto) {}
