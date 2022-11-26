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
import { CursosService } from '../services/cursos.service';
import { CreateCursoDto, UpdateCursoDto } from '../dtos/curso.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { Public } from '../../auth/decorators/public.decorator';
import { Roles } from '../../auth/decorators/roles.decorator';
import { Role } from '../../auth/models/roles.model';
import { RolesGuard } from '../../auth/guards/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('cursos')
export class CursosController {
  constructor(private cursoService: CursosService) {}

  //@Public()
  @Roles(Role.DIRECTOR)
  @Get()
  getAll() {
    return this.cursoService.findall();
  }
  @Roles(Role.PROFESOR, Role.DIRECTOR)
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.cursoService.findOne(id);
  }
  @Roles(Role.DIRECTOR)
  @Post()
  postCreate(@Body() payload: CreateCursoDto) {
    return this.cursoService.create(payload);
  }
  @Roles(Role.DIRECTOR)
  @Put(':id')
  putUpdate(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCursoDto,
  ) {
    return this.cursoService.update(id, payload);
  }
  @Roles(Role.DIRECTOR)
  @Delete(':id')
  deleteRemove(@Param('id', ParseIntPipe) id: number) {
    return this.cursoService.delete(id);
  }
}
