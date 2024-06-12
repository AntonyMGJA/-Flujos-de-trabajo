import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Municipio } from '../municipio/municipio.entity';
import { Direccion } from 'src/cliente/direccion.entity';

@Entity({name: 'localidad'})
export class Localidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Municipio, municipio => municipio.localidades)
  municipio: Municipio;

  @OneToMany(() => Direccion, direccion => direccion.localidad)
  direcciones: Direccion[];
}