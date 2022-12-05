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
import { MateriaService } from '../services/materia.service';
import { CreateMateriaDto, UpdateMateriaDto } from '../dtos/materia.dto';
import { Roles } from '../../auth/decorators/roles.decorator';
import { Role } from '../../auth/models/roles.model';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Public } from '../../auth/decorators/public.decorator';
//una materia puede tener muchas notas

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('materia')
export class MateriaController {
  constructor(private materiaService: MateriaService) {}

  @Roles(Role.DIRECTOR)
  @Get()
  getAll() {
    return this.materiaService.findall();
  }
  @Public()
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.materiaService.findOne(id);
  }
  @Roles(Role.DIRECTOR)
  @Post()
  postCreate(@Body() payload: CreateMateriaDto) {
    return this.materiaService.create(payload);
  }
  @Roles(Role.DIRECTOR)
  @Put(':id')
  putUpdate(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateMateriaDto,
  ) {
    return this.materiaService.update(id, payload);
  }
  @Roles(Role.DIRECTOR)
  @Delete(':id')
  deleteRemove(@Param('id', ParseIntPipe) id: number) {
    return this.materiaService.delete(id);
  }
}
