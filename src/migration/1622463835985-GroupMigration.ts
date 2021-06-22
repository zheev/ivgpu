import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class GroupMigration1622463835985 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'group',
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
            name: 'abbreviature',
            type: 'varchar',
          },
          {
            name: 'course',
            type: 'int',
          },
          {
            name: 'subgroup',
            type: 'int',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('group');
  }
}
