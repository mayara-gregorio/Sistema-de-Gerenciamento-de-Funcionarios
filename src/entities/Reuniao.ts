import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Funcionario } from './Funcionario'


@Entity()
export class Reuniao{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar'})
    title: string

    @Column({type: 'varchar'})
    zoomurl: string

    @ManyToMany(() => Funcionario)
    @JoinTable()
    participantes: Funcionario[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date
}