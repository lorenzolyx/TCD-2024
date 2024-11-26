import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Products } from "./products.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private repository: Repository<Products>,
  ) {}

  findAll(): Promise<Products[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<Products> {
    return this.repository.findOneBy({ id: id });
  }

  save(product: Products): Promise<Products> {
    return this.repository.save(product);  
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
