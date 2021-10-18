import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { CreateTeacherDto } from '../dto/teacher/create.dto';
import { Teacher } from '../entity/Teacher';
import { LoadRepository } from '../LoadRepository';
import  { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {
  repository;
  constructor(private teacherService: TeacherService) {
   
    console.log(teacherService);
  }

  @Get()
  async get(): Promise<Object> {
    const data = await this.repository.findAll();

    console.log(data);

    return {
      status: 'OK',
      data: {},
    };
  }
  @Post()
  async post(@Body() createTeacherDto: CreateTeacherDto): Promise<Object> {
    const teacherRepository = await LoadRepository.load(Teacher);
    const teacher = await teacherRepository.create();

    Object.assign(teacher, createTeacherDto);

    await teacherRepository.save(teacher);

    return {
      status: 'OK',
      data: createTeacherDto,
    };
  }
}
