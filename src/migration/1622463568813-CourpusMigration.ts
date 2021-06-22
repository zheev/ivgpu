import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CourpusMigration1622463568813 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'courpus',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'address',
            type: 'text',
          },
          {
            name: 'transport',
            type: 'varchar[]',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('courpus');
  }
}
