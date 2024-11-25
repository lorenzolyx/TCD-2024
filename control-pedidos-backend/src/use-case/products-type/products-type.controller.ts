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

@Controller('/products-type')  // Ajustado o nome da rota para ser mais semântico
export class ProductsTypeController {
  constructor(private service: ProductsTypeService) {}  // Corrigido o construtor

  @Get()
  findAll(): Promise<ProductsType[]> {
    return this.service.findAll();  // Corrigido a chamada do método
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<ProductsType> {  // Alterado para usar ProductsType
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Product Type not found', HttpStatus.NOT_FOUND);  // Alterada a mensagem de erro

    return found;
  }

  @Post()
  create(@Body() product: ProductsType): Promise<ProductsType> {  // Alterado para usar ProductsType
    return this.service.save(product);  // Corrigido para passar a instância de ProductsType
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() product: ProductsType,  // Alterado para usar ProductsType
  ): Promise<ProductsType> {  // Alterado para usar ProductsType
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Product Type not found', HttpStatus.NOT_FOUND);  // Alterada a mensagem de erro

    product.id = found.id;

    return this.service.save(product);  // Corrigido para salvar a instância de ProductsType
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    const found = await this.service.findById(id);

    if (!found)
      throw new HttpException('Product Type not found', HttpStatus.NOT_FOUND);  // Alterada a mensagem de erro

    return this.service.remove(id);
  }
}
