import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class KanbanColumn {

    @PrimaryColumn()
    type: number;

    @Column()
    name: string;

    @Column()
    color: string;

}