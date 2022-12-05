import { Module } from '@nestjs/common';
import { NotasController } from './controllers/notas.controller';
import { NotasService } from './services/notas.service';
import { Notas } from './entities/notas.entity';

import { CursosController } from './controllers/cursos.controller';
import { CursosService } from './services/cursos.service';
import { Curso } from './entities/curso.entity';

import { HorarioController } from './controllers/horario.controller';
import { HorarioService } from './services/horario.service';
import { Horario } from './entities/horario.entity';

import { MateriaService } from './services/materia.service';
import { MateriaController } from './controllers/materia.controller';
import { Materia } from './entities/materia.entity';
import { User } from 'src/users/entities/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '../users/services/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Notas, Curso, Horario, Materia, User])],
  exports: [MateriaService, NotasService],
  controllers: [
    NotasController,
    CursosController,
    HorarioController,
    MateriaController,
  ],
  providers: [
    HorarioService,
    CursosService,
    NotasService,
    MateriaService,
    UsersService,
  ],
})
export class ColegioModule {}
