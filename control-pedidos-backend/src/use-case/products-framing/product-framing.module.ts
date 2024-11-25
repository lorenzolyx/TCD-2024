import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsFraming } from "./products-framing.entity";
import { ProductsFramingService } from "./products-framing.service";
import { ProductsFramingController } from "./products-framing.controller";

@Module({

    imports: [TypeOrmModule.forFeature([ProductsFraming])],
    controllers: [ProductsFramingController],
    providers: [ProductsFramingService],
})
export class ProductFramingModule {}