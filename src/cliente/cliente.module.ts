import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './cliente.entity';
import { Direccion } from './direccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente, Direccion])],
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class ClienteModule {}
