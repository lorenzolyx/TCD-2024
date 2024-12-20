import { InjectRepository } from "@nestjs/typeorm";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ProductsFraming } from "./products-framing.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductsFramingService {
  constructor(
    @InjectRepository(ProductsFraming)
    private repository: Repository<ProductsFraming>,
  ) {}

  findAll(): Promise<ProductsFraming[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<ProductsFraming> {
    return this.repository.findOneBy({ id: Number(id) });

  }

  save(product: ProductsFraming): Promise<ProductsFraming> {
    return this.repository.save(product);  
  }

  async remove(id: string): Promise<void> {
    const result = await this.repository.delete(id);
  
    if (result.affected === 0) {
      throw new HttpException('Product framing not found', HttpStatus.NOT_FOUND);
    }
  }
  
}
