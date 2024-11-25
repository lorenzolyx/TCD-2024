import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { ProductsOrder } from "./products-order.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductsOrderService {
  constructor(
    @InjectRepository(ProductsOrder)
    private repository: Repository<ProductsOrder>,
  ) {}

  findAll(): Promise<ProductsOrder[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<ProductsOrder> {
    return this.repository.findOneBy({ id: id });
  }

  save(product: ProductsOrder): Promise<ProductsOrder> {
    return this.repository.save(product);  
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
