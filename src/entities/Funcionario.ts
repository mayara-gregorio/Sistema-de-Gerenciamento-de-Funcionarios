import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm'

@Entity()
export class Funcionario{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    nome: string;

    @ManyToOne(() => Funcionario, {onDelete: 'SET NULL'})
    gerente: Funcionario

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date
}