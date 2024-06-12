import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Direccion } from './direccion.entity';

@Entity({ name: 'r_cliente' })
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string

  @Column()
  apellido: string

  @ManyToOne(() => Direccion, direccion => direccion.cliente, { cascade:true } )
  direccion: Direccion

  @Column()
  rfc: string

  @Column()
  correo: string

  @Column()
  telefono: string

  @Column()
  estatus: boolean
}