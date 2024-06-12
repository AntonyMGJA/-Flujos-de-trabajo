import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Municipio } from './municipio.entity';
import { cretMunicipio } from '../municipio/dto/municipio.dto';
import { Estado } from 'src/estado/estado.entity';

@Injectable()
export class MunicipioService {
  constructor( @InjectRepository(Municipio) private readonly municipioRepository: Repository<Municipio>) {}

  async create(municipio: cretMunicipio){
    const existMunicipio = await this.municipioRepository.findOne({
      where: {
        nombre: municipio.nombre,
      },
    });

    const estado = new Estado();
    estado.id = municipio.estadoId;
    
    if (existMunicipio) {
      throw new Error('El municipio ya existe en este estado');
    };

    const muni = new Municipio();
    muni.nombre = municipio.nombre;
    muni.estado = estado

    return this.municipioRepository.save(muni);
  }

  findAll() {
    return this.municipioRepository.find({relations: {
      estado: true,
      localidades: true
    }})
  }

  getFind(id: number){
    return this.municipioRepository.findOne({where: {
        id
    },
    relations: {
      estado: true,
      localidades: true
    }
  })
}
  // Other CRUD methods...
}
