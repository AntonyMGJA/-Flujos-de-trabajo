import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { LocalidadService } from './localidad.service';
import { creatLocalidad } from './dto/localidad.dto'

@Controller('localidad')
export class LocalidadController {
    constructor(private readonly localidadService: LocalidadService) {}

    @Post()
    create(@Body() nombre: creatLocalidad) {
      return this.localidadService.create(nombre);
    }
  
    @Get()
    findAll() {
      return this.localidadService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number){
      return this.localidadService.getFind(id);
    }
}
