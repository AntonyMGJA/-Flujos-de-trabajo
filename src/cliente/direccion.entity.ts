import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import { Localidad } from '../localidad/localidad.entity';
import { Municipio } from 'src/municipio/municipio.entity';
import { Estado } from 'src/estado/estado.entity';
import { Cliente } from './cliente.entity'; 

@Entity( { name: 'client_direcciones' } )
export class Direccion {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  calle: string


  @Column()
  n_Exterior: string;

  @Column({ nullable: true })
  n_Interior: string;

  @ManyToOne(() => Localidad, localidad => localidad.direcciones)
  localidad: Localidad;

  @OneToOne(() => Cliente, cliente => cliente.direccion)
  @JoinColumn()
  cliente: Cliente[];

}