import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe, Patch } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.entity';
import { cretCliente } from './dto/cliente.dto';
import { updatCliente } from './dto/updatCliente.dto';

@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}

    @Post()
    createClient(@Body() client: cretCliente)
    {
        console.log(client)
        return this.clienteService.create(client);
    }

    @Get()
    getClients(): Promise<Cliente[]>{
        return this.clienteService.getAll();
    }

    @Get(':id')
    getClient(@Param('id', ParseIntPipe) id: number) {
        return this.clienteService.getFind(id);
    }

    @Patch(':id')
    updateClient(@Param('id', ParseIntPipe) id: number,  @Body() updatC: updatCliente) {
        return this.clienteService.updateClient(id, updatC)
    }

    @Delete(':id')
    deletClient(@Param('id', ParseIntPipe) id:number){
        return this.clienteService.deletFind(id)
    }
}
