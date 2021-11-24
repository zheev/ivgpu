import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Corpus } from '../entity/Corpus';
import { CorpusController } from './corpus.controller';
import { CorpusService } from './corpus.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Corpus])
  ],
  controllers: [CorpusController],
  providers: [
    CorpusService  
  ]
})
export class CorpusModule {}
