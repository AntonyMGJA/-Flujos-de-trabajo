import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MunicipioService } from './municipio.service';
import { cretMunicipio } from './dto/municipio.dto'

@Controller('municipio')
export class MunicipioController {
    constructor(private readonly municipioService: MunicipioService) {}

  @Post()
  create(@Body() nombre: cretMunicipio) {
    return this.municipioService.create(nombre);
  }

  @Get()
  findAll() {
    return this.municipioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number){
    return this.municipioService.getFind(id);
  }
}
