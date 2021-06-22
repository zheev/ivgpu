import { Controller, Post, Body } from '@nestjs/common';
import { CreateTeacherDto } from './dto/teacher/create.dto';

@Controller('teacher')
export class TeacherController {
  @Post()
  get(@Body() createTeacherDto: CreateTeacherDto): string {
    console.log(createTeacherDto);
    return 'OK';
  }
}
