import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './dto';
import { Cat } from './interfaces/cats.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':name')
  async findOne(@Param('name') name: string): Promise<Cat> {
    return this.catsService.findOne(name);
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return `This action updates a  #${id} cat with properties ${JSON.stringify(updateCatDto)}`;
  // }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.catsService.remove(name);
  }
}
