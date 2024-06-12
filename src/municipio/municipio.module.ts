import { Module } from '@nestjs/common';
import { MunicipioController } from './municipio.controller';
import { MunicipioService } from './municipio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Municipio } from './municipio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Municipio])],
  controllers: [MunicipioController],
  providers: [MunicipioService]
})
export class MunicipioModule {}
