import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Localidad } from '../localidad/localidad.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string

  @Column()
  apellido: string

  @Column()
  rfc: string

  @ManyToOne(() => Localidad, localidad => localidad.nombre)
  localidades: Localidad;

  @Column()
  calle: string

  @Column()
  N_exterior: number

  @Column({nullable: true})
  N_interno: number

  @Column()
  C_P: number

  @Column()
  correo: string

  @Column()
  telefono: number

  @Column({default: true})
  estatus: boolean
}