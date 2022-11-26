import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Horario } from '../entities/horario.entity';
import { CreateHorarioDto, UpdateHorarioDto } from '../dtos/horario.dto';
import { MateriaService } from './materia.service';
import { CursosService } from './cursos.service';

@Injectable()
export class HorarioService {
  constructor(
    @InjectRepository(Horario) private injectHorario: Repository<Horario>,
    private materiaService: MateriaService,
    private cursoService: CursosService,
  ) {}

  findall() {
    return this.injectHorario.find();
  }
  findOne(id: number) {
    return this.injectHorario.findOne({
      where: { id },
      relations: ['curso'],
    });
  }
  async create(data: CreateHorarioDto) {
    const newHorario = this.injectHorario.create(data);

    if (data.materiaId) {
      const materia = await this.materiaService.findOne(data.materiaId);
      newHorario.materia = materia;
    }

    if (data.cursoId) {
      const curso = await this.cursoService.findOne(data.cursoId);
      newHorario.curso = curso;
    }

    return this.injectHorario.save(newHorario);
  }
  async update(id: number, change: UpdateHorarioDto) {
    const curso = await this.injectHorario.findOne({ where: { id } });
    if (curso) {
      this.injectHorario.merge(curso, change);
      return this.injectHorario.save(curso);
    }
    return [];
  }
  delete(id: number) {
    return this.injectHorario.delete(id);
  }
}
