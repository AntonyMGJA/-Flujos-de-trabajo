import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Municipio } from '../municipio/municipio.entity';

@Entity({name: 'localidad'})
export class Localidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Municipio, municipio => municipio.localidades)
  municipio: Municipio;
}