import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsFramingModule } from './use-case/products-framing/products-framing.module';
import { ProductsModule } from './use-case/products/products.module';
import { ProductsTypeModule } from './use-case/products-type/products-type.module';
import { ProductsOrderModule } from './use-case/products-order/products-order.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      autoLoadEntities: true,  
      migrations: [`${__dirname}/migrations/*.{ts,js}`],
      migrationsRun: true, 
      migrationsTableName: 'migrations', 
    }),
    
    ProductsFramingModule,
    ProductsModule,
    ProductsOrderModule,
    ProductsTypeModule,
  ],
})
export class AppModule {}
