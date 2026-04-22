import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Funcionario } from './Funcionario';

@Entity()
export class Contato {
    @PrimaryColumn({type: 'int'})
    funcionarioId: number;

    @OneToOne(() => Funcionario)
    @JoinColumn()
    funcionario: Funcionario

    @Column({type: 'varchar'})
    telefone: string;

    @Column({type: 'varchar'})
    email: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date
}