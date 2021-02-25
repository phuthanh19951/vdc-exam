import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    category!: string;

    @Column()
    quantity!: number;

    @Column()
    price!: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;
 
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt!: Date;
}
