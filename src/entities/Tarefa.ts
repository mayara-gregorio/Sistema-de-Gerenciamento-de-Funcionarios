import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Funcionario } from './Funcionario'

@Entity()
export class Tarefa{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar'})
    title: string

    @ManyToOne(() => Funcionario, {onDelete: 'SET NULL'})
    funcionario: Funcionario

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date
}