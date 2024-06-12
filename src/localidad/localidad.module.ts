import { Module } from '@nestjs/common';
import { LocalidadController } from './localidad.controller';
import { LocalidadService } from './localidad.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Localidad } from './localidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Localidad])],
  controllers: [LocalidadController],
  providers: [LocalidadService]
})
export class LocalidadModule {}
