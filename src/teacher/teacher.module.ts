import { Module, DynamicModule } from '@nestjs/common';
import { TeacherController } from './teacher.controller';
import { teacherProviders } from './teacher.provider';
import { TeacherService } from './teacher.service';

@Module({
  controllers: [TeacherController],
  providers: [
    ...teacherProviders,
    TeacherService  
  ]
})
export class TeacherModule {}
