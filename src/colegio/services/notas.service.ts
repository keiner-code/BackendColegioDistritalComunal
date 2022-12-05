import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notas } from '../entities/notas.entity';
import { UsersService } from '../../users/services/users.service';
import { CreateNotasDto, UpdateNotasDto } from '../dtos/notas.dto';

@Injectable()
export class NotasService {
  constructor(
    @InjectRepository(Notas) private injectHorario: Repository<Notas>,
    private userService: UsersService,
  ) {}

  findall() {
    return this.injectHorario.find();
  }
  findOne(id: number) {
    return this.injectHorario.findOne({
      where: { id },
      relations: ['user'],
    });
  }
  async create(data: CreateNotasDto) {
    const newNota = this.injectHorario.create(data);
    if (data.userId) {
      const user = await this.userService.findOne(data.userId);
      newNota.user = user;
    }
    return this.injectHorario.save(newNota);
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
