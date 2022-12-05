import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { User } from '../entities/users.entity';
import { Notas } from '../../colegio/entities/notas.entity';
import { CreateTUserDto, UpdateUsersDto } from '../dtos/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private user: Repository<User>,
    @InjectRepository(Notas) private notasrepo: Repository<Notas>,
  ) {}
  findAll(): Promise<User[]> {
    return this.user.find();
  }
  findOne(id: number): Promise<User> {
    return this.user.findOne({
      where: { id },
      relations: ['notas'],
    });
  }
  findOneByEmail(email: string) {
    return this.user.findOne({ where: { email } });
  }

  findOneByCedula(cedula: number) {
    return this.user.findOne({
      where: { cedula },
      relations: ['notas', 'materia.horario.curso'],
    });
  }

  async create(payload: CreateTUserDto): Promise<User> {
    const newUser = this.user.create(payload);
    /* console.log(payload);
    if (payload.notasId) {
      const id = payload.notasId;
      const notas = await this.notasrepo.findOne({ where: { id } });
      newUser.notasId = notas;
    } */
    return this.user.save(newUser);
  }
  async update(id: number, changes: UpdateUsersDto): Promise<User | []> {
    const user = await this.user.findOne({ where: { id } });
    if (user) {
      this.user.merge(user, changes);
      return this.user.save(user);
    }
    return [];
  }
  async delete(id: number) {
    return await this.user.delete(id);
  }
}
