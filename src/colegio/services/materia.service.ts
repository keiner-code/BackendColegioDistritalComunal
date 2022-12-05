import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Materia } from '../entities/materia.entity';
import { CreateMateriaDto, UpdateMateriaDto } from '../dtos/materia.dto';
import { NotasService } from './notas.service';
//import { UsersService } from 'src/users/services/users.service';
import { User } from 'src/users/entities/users.entity';

@Injectable()
export class MateriaService {
  constructor(
    @InjectRepository(Materia) private injectHorario: Repository<Materia>,
    private notasService: NotasService,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  findall() {
    return this.injectHorario.find();
  }
  findOne(id: number) {
    return this.injectHorario.findOne({
      where: { id },
      relations: ['horario.curso', 'user'],
    });
  }
  async create(data: CreateMateriaDto) {
    const newUser = this.injectHorario.create(data);

    if (data.userIds) {
      const user = await this.userRepo.findBy({
        id: In(data.userIds),
      });
      newUser.user = user;
    }

    return this.injectHorario.save(newUser);
  }
  async update(id: number, change: UpdateMateriaDto) {
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
