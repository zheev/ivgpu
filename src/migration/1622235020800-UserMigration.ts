import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class UserMigration1622235020800 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_type',
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
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'firstName',
            type: 'varchar',
          },
          {
            name: 'lastName',
            type: 'varchar',
          },
          {
            name: 'age',
            type: 'int',
          },
          {
            name: 'typeId',
            type: 'int',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'user',
      new TableForeignKey({
        columnNames: ['typeId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user_type',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('user');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('typeId') !== -1,
    );
    await queryRunner.dropForeignKey('user', foreignKey);
    await queryRunner.dropTable('user');
    await queryRunner.dropTable('user_type');
  }
}
