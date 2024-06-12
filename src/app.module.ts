import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoModule } from './estado/estado.module';
import { MunicipioModule } from './municipio/municipio.module';
import { LocalidadModule } from './localidad/localidad.module';
import { ClienteModule } from './modul-client/cliente.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'actividad4',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    EstadoModule,
    MunicipioModule,
    LocalidadModule,
    ClienteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
