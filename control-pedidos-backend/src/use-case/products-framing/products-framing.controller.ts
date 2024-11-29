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
      throw new HttpException('Product framing not found', HttpStatus.NOT_FOUND);

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
      throw new HttpException('Product framing not found', HttpStatus.NOT_FOUND);

    product.id = found.id;

    return this.service.save(product);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    try {
      const found = await this.service.findById(id);

      if (!found) {
        throw new HttpException('Product framing not found', HttpStatus.NOT_FOUND);
      }

      await this.service.remove(id);
    } catch (error) {
      console.error('Error deleting product framing:', error.message);

      if (error.status === HttpStatus.NOT_FOUND) {
        throw error;
      }
      throw new HttpException(
        'An error occurred while deleting the product framing.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
