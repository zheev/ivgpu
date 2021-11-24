
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Corpus } from '../entity/Corpus';

@Injectable()
export class CorpusService {

  constructor(
    @InjectRepository(Corpus)
    private corpusRepository: Repository<Corpus>
  ){}
 
  async findAll(): Promise<Corpus[]> {
    return this.corpusRepository.find();
  }

  async findOne(id: number): Promise<Corpus> {
    return this.corpusRepository.findOne(id);
  }

  async remove(id: number): Promise<Object> {
    return this.corpusRepository.delete(id);
  }

  async create(createdData): Promise<Object> {
    const Corpus = await this.corpusRepository.create();

    Object.assign(Corpus, createdData);

    await this.corpusRepository.save(Corpus);

    return createdData;
  }
}
