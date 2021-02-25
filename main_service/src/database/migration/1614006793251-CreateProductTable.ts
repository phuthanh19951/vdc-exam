import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductTable1614006793251 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "products",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true
        },
        {
          name: "name",
          type: "varchar",
        },
        {
          name: "price",
          type: "int",
        },
        {
          name: "category",
          type: "varchar",
        },
        {
          name: "quantity",
          type: "int",
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }), true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
