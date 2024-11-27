import { ProductsType } from './products-type.entity';
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
import { ProductsTypeService } from './products-type.service';

@Controller('/products-type') 
export class ProductsTypeController {
  constructor(private service: ProductsTypeService) {} 
  @Get()
  findAll(): Promise<ProductsType[]> {
    return this.service.findAll(); 
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<ProductsType> { 
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Product Type not found', HttpStatus.NOT_FOUND);

    return found;
  }

  @Post()
  create(@Body() product: ProductsType): Promise<ProductsType> {  
    return this.service.save(product);  
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() product: ProductsType,  
  ): Promise<ProductsType> {  
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Product Type not found', HttpStatus.NOT_FOUND);  

    product.id = found.id;

    return this.service.save(product);  
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Product Type not found', HttpStatus.NOT_FOUND); 

    return this.service.remove(id);
  }
}
