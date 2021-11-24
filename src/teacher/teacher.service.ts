
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from '../entity/Teacher';

@Injectable()
export class TeacherService {

  constructor(
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>
  ){}
 
  async findAll(): Promise<Teacher[]> {
    return this.teacherRepository.find();
  }

  async findOne(id: number): Promise<Teacher> {
    return this.teacherRepository.findOne(id);
  }

  async remove(id: number): Promise<Object> {
    return this.teacherRepository.delete(id);
  }

  async create(createdData): Promise<Object> {
    const teacher = await this.teacherRepository.create();

    Object.assign(teacher, createdData);

    await this.teacherRepository.save(teacher);

    return createdData;
  }
}
