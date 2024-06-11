import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Localidad } from './localidad.entity'
import { creatLocalidad } from './dto/localidad.dto'

@Injectable()
export class LocalidadService {
    constructor(
        @InjectRepository(Localidad)
        private readonly localidadRepository: Repository<Localidad>,
      ) {}

    
  async create(municipio: creatLocalidad){
    const existMunicipio = await this.localidadRepository.findOne({
      where: {
        nombre: municipio.nombre,
      },
    });
    
    if (existMunicipio) {
      throw new Error('La localidad ya existe');
    }

    return this.localidadRepository.save(municipio);
  }

  findAll(): Promise<Localidad[]> {
    return this.localidadRepository.find();
  }

  getFind(id: number){
    return this.localidadRepository.findOne({where: {
        id
    }
  })
}
    
}
