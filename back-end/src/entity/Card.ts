import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Card {

    @PrimaryColumn()
    key: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    creationDate: Date;

    @Column()
    type: number;

    @Column()
    color: string;

}