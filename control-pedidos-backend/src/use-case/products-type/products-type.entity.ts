import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products_type')
export class ProductsType {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 20, nullable: false })
    name: string;
}
