import { MigrationInterface, QueryRunner, Table } from 'typeorm';
const table = 'chat';
export class Chat1673527569230 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: table,
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'from',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'text',
            type: 'longtext',
            isNullable: false,
          },
          {
            name: 'to',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'room',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'version',
            unsigned: true,
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(table);
  }
}
