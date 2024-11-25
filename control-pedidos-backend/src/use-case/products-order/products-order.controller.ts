import { ProductsOrder } from './products-order.entity';
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
import { ProductsOrderService } from './products-order.service';

@Controller('/products-order') 
export class ProductsOrderController {
  constructor(private service: ProductsOrderService) {}

  @Get()
  findAll(): Promise<ProductsOrder[]> {
    return this.service.findAll();  
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<ProductsOrder> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);  

    return found;
  }

  @Post()
  create(@Body() product: ProductsOrder): Promise<ProductsOrder> {
    return this.service.save(product); 
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() product: ProductsOrder,
  ): Promise<ProductsOrder> {
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
