import { Module } from '@nestjs/common';

import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { User } from './entities/users.entity';
import { Notas } from '../colegio/entities/notas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColegioModule } from '../colegio/colegio.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, Notas]), ColegioModule],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
