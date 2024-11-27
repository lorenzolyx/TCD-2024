import { Products } from './products.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('/products')  
export class ProductsController {
  constructor(private service: ProductsService) {}  

  @Get()
  findAll(): Promise<Products[]> {
    return this.service.findAll(); 
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Products> { 
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND); 

    return found;
  }

  @Post()
  create(@Body() product: Products): Promise<Products> {  
    return this.service.save(product);  
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() product: Products, 
  ): Promise<Products> {  
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);

    product.id = found.id;

    return this.service.save(product);  
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND); 

    return this.service.remove(id);
  }
}
