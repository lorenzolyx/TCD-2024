import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products_type')
export class ProductsType {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 60, nullable: false })
    name: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    price: number;

    @Column({ type: 'int', nullable: false })
    quantity: number;

    @Column({ nullable: true })
    image: string;
}
