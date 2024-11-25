import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsType } from "./product.entity";
import { ProductsTypeService } from "./product.service";
import { ProductsTypeController } from "./product.controller";

@Module({

    imports: [TypeOrmModule.forFeature([ProductsType])],
    controllers: [ProductsTypeController],
    providers: [ProductsTypeService],
})
export class ProductFramingModule {}