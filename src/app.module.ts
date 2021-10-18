import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/User';
import { TypeUser } from './entity/TypeUser';
import { Discipline } from './entity/Discipline';
import { Group } from './entity/Group';
import { Teacher } from './entity/Teacher';
import { TimeTable } from './entity/TimeTable';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: 5432,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [User, TypeUser, Discipline, Group, Teacher, TimeTable],
      synchronize: true,
    }),
    TeacherModule,
  ],
  controllers: [SearchController],
  providers: [AppService],
})
export class AppModule {}
