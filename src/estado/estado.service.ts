import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estado } from './estado.entity';
import { cretEstado } from './dto/estado.dto'; 

@Injectable()
export class EstadoService {
    constructor(@InjectRepository(Estado) private readonly estadoRepository: Repository<Estado>,) {}

    async create(nombre: cretEstado){
        const existingEstado = await this.estadoRepository.findOne({
          where: {
            nombre: nombre.nombre
          }
        });
        if (existingEstado) {
          throw new Error('El estado ya existe');
        }
        return this.estadoRepository.save(nombre);
      }
    
      findAll(): Promise<Estado[]> {
        return this.estadoRepository.find();
      }

      getFind(id: number){
        return this.estadoRepository.findOne({where: {
            id
        }
      })
    }
}
