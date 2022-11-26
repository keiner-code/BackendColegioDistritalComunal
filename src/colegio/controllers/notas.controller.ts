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
import { NotasService } from '../services/notas.service';
import { CreateNotasDto, UpdateNotasDto } from '../dtos/notas.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { Role } from '../../auth/models/roles.model';
import { Public } from '../../auth/decorators/public.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('notas')
export class NotasController {
  constructor(private notaService: NotasService) {}

  @Roles(Role.DIRECTOR, Role.PROFESOR)
  @Get()
  getAll() {
    return this.notaService.findall();
  }
  @Public()
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.notaService.findOne(id);
  }
  @Roles(Role.DIRECTOR, Role.PROFESOR)
  @Post()
  postCreate(@Body() payload: CreateNotasDto) {
    return this.notaService.create(payload);
  }
  @Roles(Role.DIRECTOR, Role.PROFESOR)
  @Put(':id')
  putUpdate(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateNotasDto,
  ) {
    return this.notaService.update(id, payload);
  }
  @Roles(Role.DIRECTOR)
  @Delete(':id')
  deleteRemove(@Param('id', ParseIntPipe) id: number) {
    return this.notaService.delete(id);
  }
}
