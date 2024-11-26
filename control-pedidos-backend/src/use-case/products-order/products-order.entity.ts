import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Products } from '../products/products.entity';
import { ProductsFraming } from '../products-framing/products-framing.entity';
import { ProductsType } from '../products-type/products-type.entity';

@Entity('order')
export class ProductsOrder {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date' })
  orderDate: Date;

  @Column()
  quantity: number;

  @ManyToOne(() => ProductsFraming, (productsFraming) => productsFraming.id)
  @JoinColumn({ name: 'products_framing_id' })
  productsFraming: ProductsFraming;

  @ManyToOne(() => Products, (products) => products.id)
  @JoinColumn({ name: 'products_id' })
  products: Products;

  @ManyToOne(() => ProductsType, (productsType) => productsType.id)
  @JoinColumn({ name: 'products_type_id' })
  productsType: ProductsType;
}
