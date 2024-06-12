import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Estado } from '../estado/estado.entity';
import { Localidad } from '../localidad/localidad.entity';

@Entity({ name: 'municipio' })
export class Municipio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Estado, estado => estado.municipios)
  estado: Estado;

  @OneToMany(() => Localidad, localidad => localidad.municipio)
  localidades: Localidad[];
}