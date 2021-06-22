import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class TimetableMigration1622463971857 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'type_timetable',
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
        name: 'timetable',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'teacherId',
            type: 'int',
          },
          {
            name: 'number',
            type: 'int',
          },
          {
            name: 'week',
            type: 'int',
          },
          {
            name: 'day',
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
      'timetable',
      new TableForeignKey({
        columnNames: ['teacherId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'teacher',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'timetable',
      new TableForeignKey({
        columnNames: ['typeId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'type_timetable',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('timetable');

    const foreignKeyType = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('typeId') !== -1,
    );
    await queryRunner.dropForeignKey('timetable', foreignKeyType);

    const foreignKeyTeacher = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('teacherId') !== -1,
    );
    await queryRunner.dropForeignKey('timetable', foreignKeyTeacher);

    await queryRunner.dropTable('tiemtable');
    await queryRunner.dropTable('type_timetable');
  }
}
