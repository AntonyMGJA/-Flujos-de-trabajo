import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Municipio } from '../municipio/municipio.entity';

@Entity({name: 'estado'})
export class Estado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nombre: string;

  @OneToMany(() => Municipio, municipio => municipio.estado)
  municipios: Municipio[];
}