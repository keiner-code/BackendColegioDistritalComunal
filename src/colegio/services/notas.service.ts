import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notas } from '../entities/notas.entity';
import { CreateNotasDto, UpdateNotasDto } from '../dtos/notas.dto';

@Injectable()
export class NotasService {
  constructor(
    @InjectRepository(Notas) private injectHorario: Repository<Notas>,
  ) {}

  findall() {
    return this.injectHorario.find();
  }
  findOne(id: number) {
    return this.injectHorario.findOne({ where: { id } });
  }
  create(data: CreateNotasDto) {
    return this.injectHorario.save(data);
  }
  async update(id: number, change: UpdateNotasDto) {
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
