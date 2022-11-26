import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateHorarioDto {
  @IsString()
  @IsNotEmpty()
  readonly dia: string;

  @IsString()
  @IsNotEmpty()
  readonly horaInicio: string;

  @IsString()
  @IsNotEmpty()
  readonly horaFin: string;

  @IsNumber()
  @IsNotEmpty()
  readonly materiaId: number;

  @IsNumber()
  @IsNotEmpty()
  readonly cursoId: number;
}

export class UpdateHorarioDto extends PartialType(CreateHorarioDto) {}
