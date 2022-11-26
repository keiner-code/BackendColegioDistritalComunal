import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCursoDto {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;
}

export class UpdateCursoDto extends PartialType(CreateCursoDto) {}
