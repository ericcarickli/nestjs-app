import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'implement' })
export class ImplementEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', nullable: false })
    name: string;
}