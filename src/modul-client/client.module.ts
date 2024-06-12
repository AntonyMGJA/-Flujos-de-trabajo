import { strict } from 'assert';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    RFC:string;

    //add a more complex direction or FK
    @Column()
    Direction:string;

    @Column()
    Email:string;

    @Column()
    Telephone:string;

    @Column({ default: true })
    isActive: boolean;
}