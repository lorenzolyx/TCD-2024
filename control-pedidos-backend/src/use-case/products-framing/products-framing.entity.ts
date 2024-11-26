import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products_framing')
export class ProductsFraming {

    @PrimaryGeneratedColumn('uuid')
    id: number;
    
    @Column({ length: 15, nullable: false })
    name: string;

}
