import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { ProductsType } from "../products-type/products-type.entity";
import { ProductsFraming } from "../products-framing/products-framing.entity";


@Entity('products')
export class Products {

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

    @ManyToOne(() => ProductsType, (productsType) => productsType.id)
    @JoinColumn({ name: 'products_type_id' })
    productsType: ProductsType;

    @ManyToOne(() => ProductsFraming, (productsFraming) => productsFraming.id)
    @JoinColumn({ name: 'products_framing_id' })
    productsFraming: ProductsFraming;
}
