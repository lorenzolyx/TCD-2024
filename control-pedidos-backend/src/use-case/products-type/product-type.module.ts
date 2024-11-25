import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsType } from "./products-type.entity";
import { ProductsTypeService } from "./products-type.service";
import { ProductsTypeController } from "./products-type.controller";

@Module({

    imports: [TypeOrmModule.forFeature([ProductsType])],
    controllers: [ProductsTypeController],
    providers: [ProductsTypeService],
})
export class ProductFramingModule {}