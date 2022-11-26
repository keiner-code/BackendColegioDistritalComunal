import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from '../entities/curso.entity';
import { CreateCursoDto, UpdateCursoDto } from '../dtos/curso.dto';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Curso) private injectCurso: Repository<Curso>,
  ) {}

  findall() {
    return this.injectCurso.find();
  }
  findOne(id: number) {
    return this.injectCurso.findOne({ where: { id } });
  }
  create(data: CreateCursoDto) {
    return this.injectCurso.save(data);
  }
  async update(id: number, change: UpdateCursoDto) {
    const curso = await this.injectCurso.findOne({ where: { id } });
    if (curso) {
      this.injectCurso.merge(curso, change);
      return this.injectCurso.save(curso);
    }
    return [];
  }
  delete(id: number) {
    return this.injectCurso.delete(id);
  }
}
