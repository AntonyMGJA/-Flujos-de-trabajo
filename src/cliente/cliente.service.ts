import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { updatCliente } from './dto/updatCliente.dto';
import { Cliente } from './cliente.entity';
import { cretCliente } from './dto/cliente.dto';
import { Localidad } from 'src/localidad/localidad.entity';
import { Direccion } from './direccion.entity';

@Injectable()
export class ClienteService {
    constructor(@InjectRepository(Cliente) private readonly clienteRepository: Repository<Cliente>, @InjectRepository(Direccion) private readonly directrepo: Repository<Direccion>) {}

    async create(client: cretCliente){
        const localidad = new Localidad();
        localidad.id = client.direccion.localidadId;

         const direccion = new Direccion();
         direccion.calle = client.direccion.calle;
         direccion.localidad = localidad;
         direccion.n_Exterior = client.direccion.numeroExterior;
         direccion.n_Interior = client.direccion.numeroInterior;
         
        await this.directrepo.save(direccion);

        const idclient = await this.directrepo.findOne({
           where: {
               calle: client.direccion.calle,
               n_Exterior: client.direccion.numeroExterior

           }
        });

        const direcc = new Direccion();
        direcc.id = idclient.id;

        const cli = new Cliente();
        cli.nombre = client.nombre;
        cli.apellido = client.apellidos;
        cli.rfc = client.rfc;
        cli.correo = client.email;
        cli.telefono = client.telefono;
        cli.direccion = direcc;

        await this.clienteRepository.save(cli);

        return client
    }

    getAll(){
        return this.clienteRepository.find({ relations: ['direccion', 'direccion.localidad', 'direccion.localidad.municipio', 'direccion.localidad.municipio.estado'] });
    }

    async getFind(id: number){
        return this.clienteRepository.findOne({where: {id}, relations: ['direccion', 'direccion.localidad', 'direccion.localidad.municipio', 'direccion.localidad.municipio.estado'] });
    }

    deletFind(id: number){
        const client = this.clienteRepository.findOne({where: {id}})
        if(client){
            return this.clienteRepository.delete(id);
        }
        else{
            throw new Error("No existe el cliente");
        }
    }

    async updateClient(id:number, cliente: updatCliente){
        const client = await this.clienteRepository.findOne({where: {id}, relations: ['direccion', 'direccion.localidad', 'direccion.localidad.municipio', 'direccion.localidad.municipio.estado'] });

        if(!client){
            throw new Error("No existe el cliente");
        }

         const direccion = new Direccion();
         direccion.calle = cliente.direccion.calle;
         direccion.n_Exterior = cliente.direccion.numeroExterior;
         direccion.n_Interior = cliente.direccion.numeroInterior;

         const direccid = client.direccion.id
         
        await this.directrepo.update(direccid, direccion);

        const cli = new Cliente();
        cli.nombre = cliente.nombre;
        cli.apellido = cliente.apellidos;
        cli.rfc = cliente.rfc;
        cli.correo = cliente.email;
        cli.telefono = cliente.telefono;

        await this.clienteRepository.update(id, cli);

        return client
    }

}
