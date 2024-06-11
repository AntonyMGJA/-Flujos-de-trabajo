import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Municipio } from './municipio.entity';
import { cretMunicipio } from '../municipio/dto/municipio.dto';

@Injectable()
export class MunicipioService {
  constructor(
    @InjectRepository(Municipio)
    private readonly municipioRepository: Repository<Municipio>,
  ) {}

  async create(municipio: cretMunicipio){
    const existMunicipio = await this.municipioRepository.findOne({
      where: {
        nombre: municipio.nombre,
      },
    });
    
    if (existMunicipio) {
      throw new Error('El municipio ya existe en este estado');
    }

    return this.municipioRepository.save(municipio);
  }

  findAll(): Promise<Municipio[]> {
    return this.municipioRepository.find();
  }

  getFind(id: number){
    return this.municipioRepository.findOne({where: {
        id
    }
  })
}
  // Other CRUD methods...
}
