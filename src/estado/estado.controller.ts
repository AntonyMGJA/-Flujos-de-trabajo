import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EstadoService } from './estado.service';
import { cretEstado } from './dto/estado.dto';

@Controller('estados')
export class EstadoController {
  constructor(private readonly estadoService: EstadoService) {}

  @Post()
  create(@Body() nombre: cretEstado) {
    return this.estadoService.create(nombre);
  }

  @Get()
  findAll() {
    return this.estadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number){
    return this.estadoService.getFind(id);
  }
}
