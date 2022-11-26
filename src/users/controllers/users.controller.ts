import {
  Controller,
  Get,
  Post,
  ParseIntPipe,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { CreateTUserDto, UpdateUsersDto } from '../dtos/users.dto';
import { UsersService } from '../services/users.service';
import { Roles } from '../../auth/decorators/roles.decorator';
import { Public } from '../../auth/decorators/public.decorator';
import { Role } from '../../auth/models/roles.model';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Roles(Role.DIRECTOR)
  @Get()
  getAll() {
    return this.userService.findAll();
  }
  @Public()
  @Get('root')
  getRoot() {
    return this.userService.findAll();
  }

  @Roles(Role.DIRECTOR, Role.PROFESOR)
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }
  @Public()
  @Post()
  postCreate(@Body() payload: CreateTUserDto) {
    return this.userService.create(payload);
  }
  @Roles(Role.DIRECTOR)
  @Put(':id')
  putUpdate(
    @Body() payload: UpdateUsersDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.update(id, payload);
  }
  @Roles(Role.DIRECTOR)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
