import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Localidad } from './localidad.entity'
import { creatLocalidad } from './dto/localidad.dto'
import { Municipio } from 'src/municipio/municipio.entity'; 

@Injectable()
export class LocalidadService {
    constructor(
        @InjectRepository(Localidad)
        private readonly localidadRepository: Repository<Localidad>,
      ) {}

    
  async create(localidad: creatLocalidad){
    const existMunicipio = await this.localidadRepository.findOne({
      where: {
        nombre: localidad.nombre
      }
    });

    const municipio = new Municipio();
    municipio.id = localidad.municipioId;
    
    if (existMunicipio) {
      throw new Error('La localidad ya existe');
    }

    const localid = new Localidad();
    localid.nombre = localidad.nombre;
    localid.municipio = municipio;

    return this.localidadRepository.save(localid);
  }

  findAll(): Promise<Localidad[]> {
    return this.localidadRepository.find({relations: {
      municipio: true
    }});
  }

  getFind(id: number){
    return this.localidadRepository.findOne({where: {
        id
    },
    relations: {
          municipio: true
        }                                   
  })
}
    
}
