import { Controller, Post, Get, Body, Param, Res } from '@nestjs/common';
import { CreateTeacherDto } from '../dto/teacher/create.dto';
import  { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {
  repository;
  constructor(private teacherService: TeacherService) {}

  @Get()
  async get(): Promise<Object> {
    const data = await this.teacherService.findAll();

    return {
      status: 'OK',
      data,
    };
  }
  @Get(':id')
  async getById(@Param('id') id: number, @Res() response): Promise<Object> {
    try{
      if(id === 0){
        throw 'Id is not must zero';
      }

      const data = await this.teacherService.findOne(id);

      if(!data){
        response.code(404).send('Not Found');
        throw new Error('not Found');
      }

      response.send(data);

      return {
        status: 'OK',
        data
      };
    }catch(e){
      response.code(500).send(e.message);
    }
  }
  @Post()
  async post(@Body() createTeacherDto: CreateTeacherDto): Promise<Object> {
    
    await this.teacherService.create(createTeacherDto);
    return {
      status: 'OK',
      data: createTeacherDto,
    };
  }
}
