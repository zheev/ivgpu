import { Controller, Post, Get, Body, Param, Res } from '@nestjs/common';
import { CreateCorpusDto } from '../dto/corpus/create.dto';
import { CorpusService } from './corpus.service';


@Controller('corpus')
export class CorpusController{
    repository;
    constructor(private corpusService: CorpusService) {}

    @Get()
  async get(): Promise<Object> {
    const data = await this.corpusService.findAll();

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

      const data = await this.corpusService.findOne(id);

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
  async post(@Body() createCorpusDto: CreateCorpusDto): Promise<Object> {
    
    await this.corpusService.create(createCorpusDto);
    return {
      status: 'OK',
      data: createCorpusDto,
    };
  }

}