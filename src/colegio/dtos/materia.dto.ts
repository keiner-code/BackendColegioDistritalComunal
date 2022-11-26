import { IsString, IsNotEmpty, IsArray } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateMateriaDto {
  @IsString()
  @IsNotEmpty()
  readonly materia: string;

  @IsString()
  @IsNotEmpty()
  readonly descripcion: string;

  @IsArray()
  @IsNotEmpty()
  readonly userIds: number[];
}

export class UpdateMateriaDto extends PartialType(CreateMateriaDto) {}
