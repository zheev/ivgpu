import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class GroupTimetableMigration1622490383645
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'group_timetable',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'groupId',
            type: 'int',
          },
          {
            name: 'timetableId',
            type: 'int',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'group_timetable',
      new TableForeignKey({
        columnNames: ['groupId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'group',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'group_timetable',
      new TableForeignKey({
        columnNames: ['timetableId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'timetable',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('group_timetable');

    const foreignKeyGroup = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('groupId') !== -1,
    );
    await queryRunner.dropForeignKey('group_timetable', foreignKeyGroup);

    const foreignKeyTimetable = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('timetableId') !== -1,
    );
    await queryRunner.dropForeignKey('group_timetable', foreignKeyTimetable);

    await queryRunner.dropTable('group_timetable');
  }
}
