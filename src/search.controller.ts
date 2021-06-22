import { Controller, Get, Query } from '@nestjs/common';

@Controller('search')
export class SearchController {
  @Get()
  get(@Query('name') name): string {
    console.log(name);
    return 'OK';
  }
}
