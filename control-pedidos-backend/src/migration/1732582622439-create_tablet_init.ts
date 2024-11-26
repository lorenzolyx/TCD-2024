import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTabletInit1732582622439 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE products_framing (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                name VARCHAR(15) NOT NULL
            );
            CREATE TABLE products (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                name VARCHAR(60) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                quantity INT NOT NULL,
                image VARCHAR(255) NULL,
                products_type_id UUID,
                products_framing_id UUID,
                FOREIGN KEY (products_type_id) REFERENCES products_type(id),
                FOREIGN KEY (products_framing_id) REFERENCES products_framing(id)
            );
            CREATE TABLE products_type (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                name VARCHAR(15) NOT NULL
            );
            CREATE TABLE products_order (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                order_date DATE NOT NULL,
                quantity INT NOT NULL,
                products_framing_id UUID,
                products_id UUID,
                products_type_id UUID,
                FOREIGN KEY (products_framing_id) REFERENCES products_framing(id),
                FOREIGN KEY (products_id) REFERENCES products(id),
                FOREIGN KEY (products_type_id) REFERENCES products_type(id)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE products_order;
            DROP TABLE products;
            DROP TABLE products_type;
            DROP TABLE products_framing;
        `);
    }
}
