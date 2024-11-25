import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { ProductsType } from "./product.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductsTypeService {
  constructor(
    @InjectRepository(ProductsType)
    private repository: Repository<ProductsType>,
  ) {}

  findAll(): Promise<ProductsType[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<ProductsType> {
    return this.repository.findOneBy({ id: id });
  }

  save(product: ProductsType): Promise<ProductsType> {
    return this.repository.save(product);  
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
