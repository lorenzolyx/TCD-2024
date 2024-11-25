import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsOrder } from "./products-order.entity";
import { ProductsOrderService } from "./products-order.service";
import { ProductsOrderController } from "./products-order.controller";

@Module({

    imports: [TypeOrmModule.forFeature([ProductsOrder])],
    controllers: [ProductsOrderController],
    providers: [ProductsOrderService],
})
export class ProductsOrderModule {}