import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Funcionario } from "./Funcionario";

@Entity()
export class Usuario{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", unique: true})
    email: string

    @Column({type: "varchar"})
    senha: string

    @OneToOne(() => Funcionario, {onDelete: "CASCADE"})
    @JoinColumn()
    funcionario: Funcionario

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAT: Date
}