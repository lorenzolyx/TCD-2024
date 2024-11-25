import { ProductsFraming } from './products-framing.entity';
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
import { ProductsFramingService } from './products-framing.service';

@Controller('/products-framing') 
export class ProductsFramingController {
  constructor(private service: ProductsFramingService) {}

  @Get()
  findAll(): Promise<ProductsFraming[]> {
    return this.service.findAll();  
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<ProductsFraming> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);  

    return found;
  }

  @Post()
  create(@Body() product: ProductsFraming): Promise<ProductsFraming> {
    return this.service.save(product); 
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() product: ProductsFraming,
  ): Promise<ProductsFraming> {
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
