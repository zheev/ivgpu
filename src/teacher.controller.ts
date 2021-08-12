import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateTeacherDto } from './dto/teacher/create.dto';
import { Teacher } from './entity/Teacher';
import { LoadRepository } from './LoadRepository';

@Controller('teacher')
export class TeacherController {
  @Get()
  get(@Body() createTeacherDto: CreateTeacherDto): string {
    console.log(createTeacherDto);
    return 'OK';
  }
  @Post()
  async post(@Body() createTeacherDto: CreateTeacherDto): Promise<Object> {
    const teacherRepository = await LoadRepository.load(Teacher);
    const teacher = await teacherRepository.create();

    Object.assign(teacher, createTeacherDto);

    await teacherRepository.save(teacher);

    return {
      status: 'OK'
    };
  }
}
