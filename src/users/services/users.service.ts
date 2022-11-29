import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/users.entity';
import { CreateTUserDto, UpdateUsersDto } from '../dtos/users.dto';
import { NotasService } from '../../colegio/services/notas.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private user: Repository<User>,
    private notasService: NotasService,
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
    return this.user.findOne({ where: { cedula } });
  }

  async create(payload: CreateTUserDto): Promise<User> {
    const newUser = this.user.create(payload);
    if (payload.notasId) {
      const notas = await this.notasService.findOne(payload.notasId);
      newUser.notas = notas;
    }
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
