import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products_type')
export class ProductsType {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ length: 15, nullable: false })
    name: string;
}
