import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { creatLocalidad } from 'src/localidad/dto/localidad.dto';
import { updatCliente } from './dto/updatCliente.dto';
import { Cliente } from './cliente.entity';
import { cretCliente } from './dto/cliente.dto';

@Injectable()
export class ClienteService {
    constructor(@InjectRepository(Cliente) private readonly clienteRepository: Repository<Cliente>,) {}

    create(cliente: cretCliente){
        if(!(cliente.apellido) && !(cliente.c_p) && !(cliente.calle) && !(cliente.correo) && !(cliente.localidad) && !(cliente.n_exterior) && !(cliente.nombre) && !(cliente.apellido) && !(cliente.telefono)){
            throw new Error('No esta completo el formulario');
        }
        return this.clienteRepository.save(cliente);
    }

    getAll(){
        return this.clienteRepository.find();
    }

    getFind(id: number){
        return this.clienteRepository.findOne({where: {
            id,
            
        },
      })
    }

    deletFind(id: number){
        const client = this.clienteRepository.findOne({where: {id}})
        if(client){
            this.clienteRepository.delete(id);
            return client;
        }
        else{
            throw new Error("No existe el cliente");
        }
    }

    updateClient(id:number, cliente: updatCliente){
        const client = this.clienteRepository.findOne({where: {id}})
        if(client){
            this.clienteRepository.update({id}, cliente)
            return this.clienteRepository.findOne({where:{id}});
        }

        else{
            throw new Error("No existe el cliente");
        }
    }

}
