import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  ParseIntPipe,
  Body,
  UseGuards,
} from '@nestjs/common';
import { HorarioService } from '../services/horario.service';
import { CreateHorarioDto, UpdateHorarioDto } from '../dtos/horario.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { Role } from '../../auth/models/roles.model';
import { Public } from '../../auth/decorators/public.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('horario')
export class HorarioController {
  constructor(private horarioService: HorarioService) {}

  @Roles(Role.DIRECTOR)
  @Get()
  getAll() {
    return this.horarioService.findall();
  }
  @Public()
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.horarioService.findOne(id);
  }
  @Roles(Role.DIRECTOR)
  @Post()
  postCreate(@Body() payload: CreateHorarioDto) {
    return this.horarioService.create(payload);
  }
  @Roles(Role.DIRECTOR)
  @Put(':id')
  putUpdate(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateHorarioDto,
  ) {
    return this.horarioService.update(id, payload);
  }
  @Roles(Role.DIRECTOR)
  @Delete(':id')
  deleteRemove(@Param('id', ParseIntPipe) id: number) {
    return this.horarioService.delete(id);
  }
}
